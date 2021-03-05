import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

import "./assets/style/master.css";

class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={LogIn} />
				</Switch>
			</BrowserRouter>
		)

	}

}

export default App;