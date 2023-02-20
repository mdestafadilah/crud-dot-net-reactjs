import React from "react";
import AddTestForm from "./forms/AddTestForm";
import TestList from "./tables/TestList";

export const Test = () => {
	return (
		<>
			<div className="row">
				<div className="col-md-5">
					<AddTestForm />
				</div>
				<div className="col-md-5">
					<TestList />
				</div>
			</div>
		</>
	);
};
