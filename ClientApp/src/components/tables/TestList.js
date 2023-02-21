import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestList() {
	const [dataTest, setDataTest] = useState([]);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		axios.get("https://localhost:7211/api/Test").then((res) => {
			setDataTest((data) => {
				return res.data;
			});
		});
	}, []);

	const editTest = (id) => {
		setEditing(true);
		console.log(id);
	};

	const deleteTest = (id) => {
		if (window.confirm("Yakin ingin dihapus?")) {
			axios
				.delete("https://localhost:7211/api/Test/id?id=" + id)

				// handle berhasil
				.then(function (response) {
					console.log(response);
					if (response.status === 204) {
                        console.log(response);
                        window.location.reload();
					}
				})

				// handle error
				.catch(function (response) {
					console.log(response);
				});
		}
	};

	console.log("test length:::", dataTest.length);
	if (dataTest.length === 0) return null;

	const TestRow = (test, index) => {
		console.log(test);

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

	return (
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
	);
}
