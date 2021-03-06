import React, { Component } from "react";
import { AuthProvider, IfFirebaseAuthed } from "../context/FirebaseAuthContext";

import "../assets/style/components/newpost.css";

class NewPost extends Component {

	state = {
		error: "",
		success: false,
		input: {
			title: "",
			description: "",
			file: undefined,
			image: undefined
		}
	}

	render() {

		return (
			<AuthProvider>
				<IfFirebaseAuthed>
					<section id="create-post">
						<h1>New Post</h1>
						<div>
							<label>Title:</label>
							<br />
							<input 
								name="title"
								type="text"
								disabled={this.state.disabled}
								placeholder="Awesome Dildo Gun v2"
							/>
						</div>
						<div>
							<label>Description:</label>
							<br />
							<textarea 
								name="title"
								type="text"
								rows="5"
								disabled={this.state.disabled}
								placeholder="This dildo gun will tear your life apart :D"
							/>
						</div>
						<div>
							<label>Mod file(zip/rar):</label>
							<br />
							<input 
								name="file"
								type="file"
								disabled={this.state.disabled}
							/>
						</div>
						<div>
							<label>Mod Image(jpg/png/gif):</label>
							<br />
							<input 
								name="image"
								type="file"
								disabled={this.state.disabled}
							/>
						</div>
						<button
							disabled={this.state.disabled}
						>Add your awesome mod!!@!@</button>
					</section>
				</IfFirebaseAuthed>
			</AuthProvider>
		);

	}
}

export default NewPost;