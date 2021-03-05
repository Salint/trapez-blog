import React, { Component } from "react";
import firebase from "../services/FirebaseService";
import { AuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "../context/FirebaseAuthContext";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "../assets/style/components/navbar.css"

class Navbar extends Component {

	logOut() {

		firebase.auth().signOut();

	}

	render() {

		return (
			<nav>
				<div id="nav-name">
					<a href="/"><h1>Trapez's Modding Shop</h1></a>
				</div>
				<div id="nav-links">
					<AuthProvider>
						<IfFirebaseAuthed>
							<a href="/" onClick={() => this.logOut()}>Log Out</a>
						</IfFirebaseAuthed>
						<IfFirebaseUnAuthed>
							<a href="/login">Login</a>
						</IfFirebaseUnAuthed>
					</AuthProvider>
					<a id="github" href="https://github.com/Salint/trapez-blog"><FontAwesomeIcon icon={faGithub}/></a>
				</div>
			</nav>
		)

	}

}

export default Navbar;