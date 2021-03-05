import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import FAQ from "./pages/Faq";

import "./assets/style/master.css";

class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/faq" component={FAQ} />
				</Switch>
			</BrowserRouter>
		)

	}

}

export default App;