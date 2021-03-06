import React, { Component } from "react";
import firebase from "../services/FirebaseService";

// Components
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

class Posts extends Component {

	state = {
		mods: [],
		images: []
	}

	componentDidMount() {

		(async () => {

			try {
				const results = await firebase.firestore().collection("mods").get();

				this.setState({
					mods: results.docs
				});

				this.state.mods.forEach(async mod => {
					const image = await firebase.storage().ref(mod.id + "/image." + mod.get("imageExtension")).getDownloadURL();

					this.setState(prev => ({
						images: [
							...prev.images,
							image
						]
					}));
				});
			}
			catch (error) {
				console.log(error);
			}

		})();

	}
	
	render() {

		return (
			<section id="posts">
				{ 
				
				this.state.mods.map(mod => 
						<Post name={mod.get("title")} date={"this"}>
							<p>{mod.get("description")}</p>
							<img src={this.state.images[this.state.mods.indexOf(mod)]} alt="Mod" />
						</Post>
				)
				
				}
			</section>
		)

	}

}

class Home extends Component {

	render() {

		return (
			<>
				<Navbar />
				<NewPost />
				<Posts />
			</>
		)

	}

}

export default Home;