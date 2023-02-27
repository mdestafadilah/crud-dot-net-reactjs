import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "reactstrap";
import axios from "axios";

export const Peserta = () => {
	const initPeserta = { id: null, namaDepan: "", namaBelakang: "" };
	const [peserta, setPeserta] = useState(initPeserta);
	const [dataPeserta, setDataPeserta] = useState([]);

	const [errorMsg, setErrorMsg] = useState("");
	const { namaDepan, namaBelakang } = peserta;

	useEffect(() => {
        axios.get("https://localhost:7211/api/Peserta").then((res) => {
            setDataPeserta((data) => {
                return res.data;
            })
        })
    },[]);

	// handle form peserta
	const handleOnSubmit = (e) => {
		e.preventDefault();

		// Assign state to array
		const values = [namaDepan, namaBelakang];
		let errorMsg = "";

		// Clean HTML using Every Function
		const allFieldsFilled = values.every((field) => {
			const value = `${field}`.trim();
			return value !== "" && value !== "0";
		});

		if (allFieldsFilled) {
			const peserta = {
				id: uuidv4(),
				namaDepan,
				namaBelakang,
			};
			// handleChangeInput(e, props.addPeserta(peserta));
			axios.post("https://localhost:7211/api/Peserta", peserta).then((res) => {
				navigate("/peserta");
			});
		} else {
			errorMsg = "Tolong Isi semua!";
		}
		setErrorMsg(errorMsg);
	};

	// handle inputan
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setPeserta({ ...peserta, [name]: value });
	};

	// Table builder
	if (dataPeserta.length === 0) return null;
	const PesertaRow = (user, index) => {
		return (
			<tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
				<td>{index + 1}</td>
				<td>{user.namaDepan}</td>
				<td>{user.namaBelakang}</td>
				<td>
					<button
						onClick={() => deletePeserta(user.id)}
						className="btn btn-primary"
					>
						Delete
					</button>
					<button onClick={() => editPeserta(user.id)} className="btn btn-info">
						Edit
					</button>
				</td>
			</tr>
		);
	};

	const pesertaTable = dataPeserta.map((user, index) =>
		PesertaRow(user, index)
	);

	return (
		<>
			<div className="row">
				<div className="col-md-5">
					<h2>Tambah Peserta</h2>
					{errorMsg && <Alert color="danger">{errorMsg}</Alert>}
					<form>
						<div className="row">
							<div className="form-group col-md-12">
								<label htmlFor="namaDepan">Nama Depan</label>
								<input
									type="text"
									className="form-control"
									name="namaDepan"
									id="namaDepan"
									placeholder="Nama Depan"
									onChange={handleChangeInput}
									value={peserta.namaDepan}
								/>
							</div>
							<div className="form-group col-md-12">
								<label htmlFor="namaBelakang">Nama Belakang</label>
								<input
									type="text"
									className="form-control"
									name="namaBelakang"
									id="namaBelakang"
									placeholder="Nama Belakang"
									onChange={handleChangeInput}
									value={peserta.namaBelakang}
								/>
							</div>
						</div>
						<br />
						<button
							type="submit"
							className="btn btn-danger"
							onClick={handleOnSubmit}
						>
							Tambah
						</button>
					</form>
				</div>
				<div className="col-md-7">
					<div className="container">
						<h2>Daftar Peserta</h2>
						<br />
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nama Depan</th>
									<th>Nama Belakang</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>{pesertaTable}</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
