import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "reactstrap";
import axios from "axios";

export const Test = () => {
	const initTest = { id: null, namaTest: "" };
	const [test, setTest] = useState(initTest);
	const [dataTest, setDataTest] = useState([]);
	const [currentTest, setCurrentTest] = useState([]);
	const [errorMsg, setErrorMsg] = useState("");
	const { namaTest } = test;

	useEffect(() => {
		axios.get("https://localhost:7211/api/test").then((res) => {
			setDataTest((data) => {
				return res.data;
			});
		});
	}, []);

	// submit with empty ID
	const handleOnSubmit = (e) => {
		e.preventDefault();

		// Assign state to array
		const values = [namaTest];
		let errorMsg = "";

		// Clean HTML using Every Function
		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== "" && value !== "0";
		});

		if (allFieldsFilled) {
			const test = {
				id: uuidv4(),
				namaTest,
			};
			// handleChangeInput(e, props.addPeserta(test));
			axios
				.post("https://localhost:7211/api/test", test)
				.then((res) => {
					console.log(res);
					window.location.reload();
				})
				.catch((error) => {
					console.log("Proses submit gagal", error);
				});
		} else {
			errorMsg = "Tolong Isi semua!";
		}
		setErrorMsg(errorMsg);
	};

	const editTest = (id) => {
		// setEditing(true);
		axios.get("https://localhost:7211/api/test/id?id=" + id).then((res) => {
			//console.log(res)
			if (res) {
				setCurrentTest(res.data);
			}
		});
	};

	// onClick Hapus
	const deleteTest = (id) => {
		if (window.confirm("Yakin ingin dihapus?")) {
			axios
				.delete("https://localhost:7211/api/test/id?id=" + id)

				// handle berhasil
				.then((response) => {
					console.log(response);
					if (response.status === 204) {
						console.log(response);
						window.location.reload();
					}
				})

				// handle error
				.catch((response) => {
					console.log(response);
				});
		}
	};

	// handle inputan
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setTest({ ...test, [name]: value });
	};

	// Table Builder
	if (dataTest.length === 0) return null;
	const TestRow = (test, index) => {
		// console.log(test);
		return (
			<tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
				<td>{index + 1}</td>
				<td>{test.namaTest}</td>
				<td>
					<button
						onClick={() => deleteTest(`${test.id}`)}
						className="btn btn-primary"
					>
						Delete
					</button>
					<button
						onClick={() => editTest(`${test.id}`)}
						className="btn btn-info"
					>
						Edit
					</button>
				</td>
			</tr>
		);
	};
	const testTabel = dataTest.map((user, index) => TestRow(user, index));

	return ( //console.log(currentTest),
		<div className="row">
			<div className="col-md-5">
				<h2>Tambah Test</h2>
				{errorMsg && <Alert color="danger">{errorMsg}</Alert>}
				<form>
					<div className="row">
						<div className="form-group col-md-12">
							<label htmlFor="namaTest">Nama Test</label>
							<input
								type="text"
								className="form-control"
								name="namaTest"
								id="namaTest"
								placeholder="Nama Test"
								onChange={handleChangeInput}
								defaultValue={currentTest.namaTest}
							/>
						</div>
					</div>
					<br />
					<button
						type="button"
						className="btn btn-danger"
						onClick={handleOnSubmit}
					>
						Tambah
					</button>
				</form>
			</div>
			<div className="col-md-5">
				<div className="container">
					<h2>Daftar Peserta</h2>
					<br />
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Id</th>
								<th>Nama Test</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>{testTabel}</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
