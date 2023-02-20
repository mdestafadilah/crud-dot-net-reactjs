import React from "react";
import AddPesertaForm from "./forms/AddPesertaForm";
import PesertaList from "./tables/PesertaList";

export const Peserta = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-5">
					<AddPesertaForm />
				</div>
				<div className="col-md-7">
					<PesertaList />
				</div>
			</div>
		</>
	);
};
