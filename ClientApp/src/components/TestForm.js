import React from "react";

export default function TestForm() {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-7 mrgnbtm">
						<h2>Tambah Test</h2>
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
