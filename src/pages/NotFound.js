import React, { Component } from "react";

// Components
import Navbar from "../components/Navbar";

import BrokenMonitor from "../assets/images/not_found.png"

import "../assets/style/pages/notfound.css";

class NotFound extends Component {

	render() {

		return (
			<section id="not-found">
				<div>
					<h2>Seems like you're lost...</h2>
					<p>Our highly trained experts were unable to find this page. <a href="/">Go to the home page?</a></p>
				</div>
				<img src={BrokenMonitor} alt="Broken Monitor"/>
			</section>
		)

	}

}

class WhyCantCreateAccount extends Component {

	render() {

		return (
			<>
				<Navbar />
				<NotFound />
			</>
		)

	}

}

export default WhyCantCreateAccount;