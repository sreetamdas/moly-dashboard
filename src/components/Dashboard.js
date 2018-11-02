import React from "react";
import Add from "./Add";
import Tables from "./Tables";

export default class Dashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>Dashboard</div>
				<Add />
				<Tables />
			</React.Fragment>
		);
	}
}
