import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import firebase from "../services/FirebaseService";
import { AuthProvider, IfFirebaseAuthed } from "../context/FirebaseAuthContext";

// Components
import Navbar from "../components/Navbar";

import "../assets/style/pages/login.css";

class Form extends Component {

	state = {
		error: "",
		disabled: false,
		success: false,
		input: {
			email: "",
			password: ""
		}
	}

	handleInput(event) {

		this.setState(prev => ({
			input: {
				...prev.input,
				[event.target.name]: event.target.value
			}
		}));

	}

	logIn() {

		this.setState({
			disabled: true
		});

		if(this.state.input.email.length < 1 || this.state.input.password.length < 1) {
			this.setState({
				error: "Please fill out all fields",
				disabled: false
			});
		}

		else {

			(async () => {
				try {

					await firebase.auth().signInWithEmailAndPassword(this.state.input.email, this.state.input.password);

					this.setState({
						success: true
					});
				}	
				catch({ message }) {
					
					this.setState({
						disabled: false,
						error: message
					});

				}

			})();

		}

	}

	render() {

		return (
			<section id="login-form">
				<h1>Access your account</h1>
				{ 
				this.state.error.length > 0 &&
				<h3 class="error">{this.state.error}</h3>
				}
				<div>
					<label>Email: </label>
					<br />
					<input 
						name="email" 
						type="email" 
						disabled={this.state.disabled} 
						placeholder="pro_gta_modder@hotmail.com" 
						onChange={e => this.handleInput(e)}
					/>
				</div>
				<div>
					<label>Password: </label>
					<br />
					<input 
						name="password" 
						type="password" 
						disabled={this.state.disabled} 
						placeholder="••••••••" 
						onChange={e => this.handleInput(e)}
					/>
				</div>
				<button
					disabled={this.state.disabled}
					onClick={() => this.logIn()}
				>Log In</button>
				<a href="/faq">Why can't I make my own account?</a>
				<AuthProvider>
					<IfFirebaseAuthed>
						<Redirect path="/" />
					</IfFirebaseAuthed>
				</AuthProvider>
				{ this.state.success && <Redirect path="/" /> }
			</section>
		)

	}

}

class Home extends Component {

	render() {

		return (
			<>
				<Navbar />
				<Form />
			</>
		)

	}

}

export default Home;