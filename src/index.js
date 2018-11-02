import React from "react";
import ReactDOM from "react-dom";

import Dashboard from "./components/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
	return (
		<React.Fragment>
			<div className="App">
				<Dashboard />
			</div>
		</React.Fragment>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
