import React, { Component } from "react";
import { AuthProvider, IfFirebaseAuthed } from "../context/FirebaseAuthContext";
import firebase from "../services/FirebaseService";

import "../assets/style/components/newpost.css";

class NewPost extends Component {

	state = {
		error: "",
		status: "",
		success: false,
		disabled: false,
		input: {
			title: "",
			description: "",
			file: undefined,
			image: undefined
		}
	}

	handleTextInput({ target }) {

		this.setState(prev => ({
			input: {
				...prev.input,
				[target.name]: target.value
			}
		}));

	}

	handleFileInput({ target }) {

		this.setState(prev => ({
			input: {
				...prev.input,
				[target.name]: target.files[0]
			}
		}));

	}

	uploadMod() {

		this.setState({
			disabled: true
		});
		
		if(this.state.input.title.length < 1 || this.state.input.description.length < 1 || !this.state.input.file || !this.state.input.image) {

			this.setState({
				disabled: false,
				error: "Please fill out all the fields"
			});

		}
		else {

			( async () => {

				try {
					
					this.setState({
						status: "Adding mod to database",
						error: ""
					});

					const date = new Date();

					const document = await firebase.firestore().collection("mods").add({
						title: this.state.input.title,
						description: encodeURIComponent(this.state.input.description),
						imageExtension: this.state.input.image.name.split(".")[1],
						modExtension: this.state.input.file.name.split(".")[1],
						date: date
					});

					this.setState({
						status: "Uploading mod image"
					});
					
					await firebase.storage().ref(document.id + "/image." + this.state.input.image.name.split(".")[1]).put(this.state.input.image);

					this.setState({
						status: "Uploading mod files"
					});
					
					await firebase.storage().ref(document.id + "/file." + this.state.input.file.name.split(".")[1]).put(this.state.input.file);

					this.setState({
						success: true,
						status: "",
						error: ""
					});

				}
				catch(error) {


					this.setState({
						disabled: false,
						status: "",
						error: "An error has occured. Try again later."
					});
				}

			})();

		}

	}

	render() {

		return (
			<AuthProvider>
				<IfFirebaseAuthed>
					<section id="create-post">
						<h1>New Post</h1>
						{ 
						this.state.error.length > 0 &&
						<h3 class="error">{this.state.error}</h3>
						}
						{ 
						this.state.status.length > 0 &&
						<h3 class="status">{this.state.status}</h3>
						}
						{ 
						this.state.success &&
						<h3 class="success">Mod uploaded.<br />Refresh the page.</h3>
						}
						<div>
							<label>Title:</label>
							<br />
							<input 
								name="title"
								type="text"
								disabled={this.state.disabled}
								placeholder="Awesome Dildo Gun v2"
								onChange={e => this.handleTextInput(e)}
							/>
						</div>
						<div>
							<label>Description:</label>
							<br />
							<textarea 
								name="description"
								type="text"
								rows="5"
								disabled={this.state.disabled}
								placeholder="This dildo gun will tear your life apart :D"
								onChange={e => this.handleTextInput(e)}
							/>
						</div>
						<div>
							<label>Mod file(zip/rar):</label>
							<br />
							<input 
								name="file"
								type="file"
								disabled={this.state.disabled}
								onChange={e => this.handleFileInput(e)}
							/>
						</div>
						<div>
							<label>Mod Image(jpg/png/gif):</label>
							<br />
							<input 
								name="image"
								type="file"
								disabled={this.state.disabled}
								onChange={e => this.handleFileInput(e)}
							/>
						</div>
						<button
							disabled={this.state.disabled}
							onClick={() => this.uploadMod()}
						>Add your awesome mod!!@!@</button>
					</section>
				</IfFirebaseAuthed>
			</AuthProvider>
		);

	}
}

export default NewPost;