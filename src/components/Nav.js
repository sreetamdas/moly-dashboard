import React from "react";

export default class Nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: "Tables"
		};
	}

	render() {
		return (
			<React.Fragment>
				<div>
					<h2
						style={
							this.state.active === "Tables"
								? { color: "#fff", backgroundColor: "#004380" }
								: { color: "black" }
						}
					>
						Pods
					</h2>
					<h2
						style={
							this.state.active === "Add"
								? { color: "#fff", backgroundColor: "#004380" }
								: { color: "black" }
						}
					>
						CI-CD
					</h2>
				</div>
			</React.Fragment>
		);
	}
}
