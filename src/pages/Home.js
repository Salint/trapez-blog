import React, { Component } from "react";

// Components
import Navbar from "../components/Navbar";
import Post from "../components/Post";

import placeholderImage from "../assets/images/placeholder.jpg";

class Posts extends Component {
	
	render() {

		return (
			<section id="posts">
				<Post name="Trapez" date="3/5/2021">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa. Purus gravida quis blandit turpis. A iaculis at erat pellentesque adipiscing commodo elit at. Cras sed felis eget velit. Sit amet facilisis magna etiam tempor orci. Massa placerat duis ultricies lacus sed turpis tincidunt id. Diam volutpat commodo sed egestas egestas fringilla. Dui id ornare arcu odio ut sem nulla pharetra diam. Nunc sed velit dignissim sodales ut eu. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Sed faucibus turpis in eu.</p>
					<img src={placeholderImage} alt="Mod" />
				</Post>
				<Post name="Trapez" date="3/5/2021">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa. Purus gravida quis blandit turpis. A iaculis at erat pellentesque adipiscing commodo elit at. Cras sed felis eget velit. Sit amet facilisis magna etiam tempor orci. Massa placerat duis ultricies lacus sed turpis tincidunt id. Diam volutpat commodo sed egestas egestas fringilla. Dui id ornare arcu odio ut sem nulla pharetra diam. Nunc sed velit dignissim sodales ut eu. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Sed faucibus turpis in eu.</p>
					<img src={placeholderImage} alt="Mod" />
				</Post>
				<Post name="Trapez" date="3/5/2021">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam id leo in vitae turpis massa. Purus gravida quis blandit turpis. A iaculis at erat pellentesque adipiscing commodo elit at. Cras sed felis eget velit. Sit amet facilisis magna etiam tempor orci. Massa placerat duis ultricies lacus sed turpis tincidunt id. Diam volutpat commodo sed egestas egestas fringilla. Dui id ornare arcu odio ut sem nulla pharetra diam. Nunc sed velit dignissim sodales ut eu. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Sed faucibus turpis in eu.</p>
					<img src={placeholderImage} alt="Mod" />
				</Post>
			</section>
		)

	}

}

class Home extends Component {

	render() {

		return (
			<>
				<Navbar />
				<Posts />
			</>
		)

	}

}

export default Home;