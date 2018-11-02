import React from "react";
import axios from "axios";

export default class Tables extends React.Component {
	constructor(props) {
		super(props);

		this.renderTable = this.renderTable.bind(this);
		this.state = { active: true };
	}

	componentDidMount = () => {
		this.fetchData();
	};
	renderTable = () => {
		// const data = [ ...this.state.data ];

		return (
			<tr>
				<td>naame</td>
				<td>iip</td>
				<td>statuss</td>
				<td>
					<button className="btn btn-md btn-danger">
						Kill Instance
					</button>
				</td>
			</tr>
		);
	};

	fetchData = () => {
		axios
			.get("http://35.237.161.200:5000/dashboard/")
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
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>IP</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>

					<tbody>{this.state.active && this.renderTable()}</tbody>
				</table>
			</React.Fragment>
		);
	}
}
