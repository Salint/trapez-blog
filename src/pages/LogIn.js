import React, { Component } from "react";

// Components
import Navbar from "../components/Navbar";

import "../assets/style/pages/login.css";

class Form extends Component {

	state = {
		error: "",
		disabled: false,
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

	render() {

		return (
			<section id="login-form">
				<h1>Access your account</h1>
				<div>
					<label>Email: </label>
					<br />
					<input 
						name="email" 
						type="email" 
						disabled={this.state.disabled} 
						placeholder="pro_gta_modder@hotmail.com" 
					/>
				</div>
				<div>
					<label>Password: </label>
					<br />
					<input 
						name="email" 
						type="email" 
						disabled={this.state.disabled} 
						placeholder="••••••••" 
					/>
				</div>
				<button
					disabled={this.state.disabled}
				>Log In</button>
				<a href="/why-i-can't-make-an-account">Why can't I make my own account?</a>
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