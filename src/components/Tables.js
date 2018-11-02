import React from "react";
import axios from "axios";

export default class Tables extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	fetchData = () => {
		axios
			.get()
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<React.Fragment>
				<table className="table" />
			</React.Fragment>
		);
	}
}
