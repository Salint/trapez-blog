import React, { Component } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../assets/style/components/navbar.css"

class Navbar extends Component {

	render() {

		return (
			<nav>
				<div id="nav-name">
					<a href="/"><h1>Trapez Blog</h1></a>
				</div>
				<div id="nav-links">
					<a href="/login">Login</a>
					<a id="github" href="https://github.com/Salint/trapez-blog"><FontAwesomeIcon icon={faGithub}/></a>
				</div>
			</nav>
		)

	}

}

export default Navbar;