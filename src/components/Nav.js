import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
				<Router>
					<div>
						<Link to="/">
							<h2
								style={
									this.state.active === "Tables"
										? {
												color: "#fff",
												backgroundColor: "#004380"
										  }
										: { color: "black" }
								}
							>
								Pods
							</h2>
						</Link>
						<Link to="/CI_CD">
							<h2
								style={
									this.state.active === "Add"
										? {
												color: "#fff",
												backgroundColor: "#004380"
										  }
										: { color: "black" }
								}
							>
								CI-CD
							</h2>
						</Link>
					</div>
				</Router>
			</React.Fragment>
		);
	}
}
