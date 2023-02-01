import React from "react";

export default function PesertaForm() {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-7 mrgnbtm">
						<h2>Tambah Peserta</h2>
						<form>
							<div className="row">
								<div className="form-group col-md-12">
									<label htmlFor="namaDepan">Nama Depan</label>
									<input
										type="text"
										className="form-control"
										name="namadepan"
										id="namadepan"
										placeholder="Nama Depan"
									/>
								</div>
								<div className="form-group col-md-12">
									<label htmlFor="namaBelakang">Nama Belakang</label>
									<input
										type="text"
										className="form-control"
										name="namabelakang"
										id="namabelakang"
										placeholder="Nama Belakang"
									/>
								</div>
							</div>
                            <br />
							<button type="button" className="btn btn-danger">
								Tambah
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
