import React from "react";
import TestForm from "./TestForm";
import TestList from "./TestList";

export const Test = () => {
	const handleOnSubmit = (peserta) => {
		console.log(peserta);
	};

	return (
		<>
			<div className="row">
				<div className="col-md-5">
					<TestForm handleSubmit={handleOnSubmit} />
				</div>
        <div className="col-md-5">
          <TestList />
        </div>
			</div>
		</>
	);
};
