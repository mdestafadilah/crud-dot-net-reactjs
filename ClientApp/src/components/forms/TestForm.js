import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "reactstrap";

export default function TestForm() {
	const initTest = { id: null, namaTest: "" };
	const [test, setTest] = useState(initTest);

	const [errorMsg, setErrorMsg] = useState("");
	const { namaTest } = test;

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
			console.log(test);
		} else {
			errorMsg = "Tolong Isi semua!";
		}
		setErrorMsg(errorMsg);
	};

	// handle inputan
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setTest({ ...test, [name]: value });
	};

	return (
		<>
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
						/>
					</div>
				</div>
				<br />
				<button type="button" className="btn btn-danger" onClick={handleOnSubmit}>
					Tambah
				</button>
			</form>
		</>
	);
}
