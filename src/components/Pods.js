import React from "react";
import axios from "axios";

export default class Pods extends React.Component {
	constructor(props) {
		super(props);

		this.renderTable = this.renderTable.bind(this);
		this.state = {
			active: true,
			data: {
				ip: ["10.56.0.27", "10.56.1.19", "10.56.0.26", "10.56.1.10"],
				name: [
					"app-orange-53dc4be6f62dd408be35406f2486247c-2rfqx",
					"app-orange-53dc4be6f62dd408be35406f2486247c-b7whc",
					"app-orange-53dc4be6f62dd408be35406f2486247c-z5r48",
					"database-cfwp8"
				]
			}
		};
	}

	componentDidMount = () => {
		// this.fetchData();
	};
	renderTable = () => {
		const data = { ...this.state.data };
		console.log({ data });

		const ips = [...data[`ip`]];
		const names = [...data[`name`]];

		console.log({ ips });
		console.log({ names });

		return (
			<React.Fragment>
				{ips.map((ip, index) => (
					<tr>
						<td>{names[index]}</td>
						<td>{ip}</td>
						<td>statuss</td>
						<td>
							<button
								className="btn btn-md btn-danger"
								onClick={e =>
									this.killNode(e, `${names[index]}`)
								}
							>
								Kill Instance
							</button>
						</td>
					</tr>
				))}
			</React.Fragment>
		);
	};

	killNode = (e, node) => {
		e.preventDefault();
		console.log(node);
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
