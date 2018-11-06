import React from "react";
import axios from "axios";

export default class CICD extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			html: ""
		};
	}

	getFromServer = () => {
		axios
			.get("http://localhost:5000")
			.then(response => {
				console.log({ response });
			})
			.catch(error => {
				console.log({ error });
			});
	};

	putToServer = (e, html) => {
		e.preventDefault();

		this.setState({
			html: html
		});

		axios
			.get("http://localhost:5000/update/")
			.then(response => {
				console.log({ response });
			})
			.catch(error => {
				console.log({ error });
			});
	};
	render() {
		return (
			<React.Fragment>
				<textarea />
				<button className="btn btn-lg btn-primary">Add</button>
			</React.Fragment>
		);
	}
}
