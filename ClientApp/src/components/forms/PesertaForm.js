import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Alert } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PesertaForm(props) {
	const initPeserta = { id: null, namaDepan: "", namaBelakang: "" };
	const [peserta, setPeserta] = useState(initPeserta);

	const [errorMsg, setErrorMsg] = useState("");
	const { namaDepan, namaBelakang } = peserta;

	const navigate = useNavigate();

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

	return (
		<div>
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
	);
}
