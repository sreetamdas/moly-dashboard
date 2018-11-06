import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CICD from "./CICD";
import Pods from "./Pods";

export default class Dashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>Dashboard</div>
				{/* <Nav /> */}
				<Router basename={process.env.PUBLIC_URL}>
					<div>
						<Link to="/">
							<h2>Pods</h2>
						</Link>
						<Link to="/CI_CD">
							<h2>CI-CD</h2>
						</Link>
						<Route exact path="/" component={Pods} />
						<Route exact path="/CI_CD" component={CICD} />
					</div>
				</Router>
			</React.Fragment>
		);
	}
}
