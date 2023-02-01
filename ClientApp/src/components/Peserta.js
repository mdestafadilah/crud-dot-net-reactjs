import React from "react";
import PesertaForm from "./forms/PesertaForm";
import PesertaList from "./tables/PesertaList";

export const Peserta = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-5">
					<PesertaForm />
				</div>
				<div className="col-md-7">
					<PesertaList />
				</div>
			</div>
		</>
	);
};
