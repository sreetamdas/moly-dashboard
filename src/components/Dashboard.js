import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import CICD from "./CICD";
import Pods from "./Pods";
import Nav from "./Nav";

export default class Dashboard extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>Dashboard</div>
				<Nav />
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<Switch>
						<Route exact path="/" component={Pods} />
						<Route exact path="/CI_CD" component={CICD} />
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}
