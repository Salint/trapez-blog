import React, { Component } from "react";

// Components
import Navbar from "../components/Navbar";

import "../assets/style/pages/faq.css";

class Article extends Component {

	render() {

		return (
			<section id="faq">
				<article class="question">
					<h1>What is this?</h1>
					<p>
						Trapez's Modding Shop is a site where Trapez and his chosen collection of members for them to showcase their mods and models.
					</p>
				</article>
				<article class="question">
					<h1>Why can't I create an account?</h1>
					<p>
						Trapez and his chosen collection of members are the only one able to showcase their mods on the site. 
						Guests are able to like and downloads the mods and models posted by the members.
					</p>
				</article>
				<article class="question">
					<h1>How can I contribute to this?</h1>
					<p>
						You can contribute to this site by making a pull request at the <a href="https://github.com/Salint/trapez-blog">GitHub repository.</a><br />
						This website is powered by <a href="https://firebase.google.com/">Firebase</a>.
					</p>
				</article>
			</section>
		)

	}

}

class WhyCantCreateAccount extends Component {

	render() {

		return (
			<>
				<Navbar />
				<Article />
			</>
		)

	}

}

export default WhyCantCreateAccount;