import React from "react";
import PesertaForm from "./PesertaForm";
import PesertaList from "./PesertaList";

export const Peserta = () => {
	const handleOnSubmit = (peserta) => {
		console.log(peserta);
	};

	return (
		<>
				<div className="row">
					<div className="col-md-5">
						<PesertaForm handleSubmit={handleOnSubmit} />
					</div>
          <div className="col-md-7">
            <PesertaList />
          </div>
				</div>
		</>
	);
};
