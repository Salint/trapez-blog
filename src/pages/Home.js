import React, { Component } from "react";
import getPosts from "../services/PostService";

// Components
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

class Posts extends Component {

	state = {
		mods: []
	}

	componentDidMount() {

		(async () => {

			try {
				
				const posts = await getPosts();

				this.setState({
					mods: posts,
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
						<Post name={mod.title} date={`${mod.date.getDay()}/${mod.date.getMonth() + 1}/${mod.date.getFullYear()}`}>
							<p>{mod.description}</p>
							<a href={mod.file}>Download</a>
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