import React, { Component } from "react";

import "../assets/style/components/post.css";

class Post extends Component {

	render() {

		return (
			<article class="post">
				<div class="post-author">
					<h1>{this.props.name}</h1>
					<h3>Posted on {this.props.date}</h3>
				</div>
				<div class="post-content">
					{this.props.children}
				</div>
			</article>
		)

	}

}

export default Post;