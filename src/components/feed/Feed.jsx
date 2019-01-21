import React, { Component } from 'react';


import FeedItem from './feedItem/FeedItem';

import './Feed.css';

export class Feed extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
		}
	}
		
		componentDidMount() {
			this.getPosts();
		}

	
	getPosts = () => {
    fetch(`${this.props.authService.domain}/feed/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.authService.getToken()}`,
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        this.setState(oldState => ({...oldState, posts: resp.posts}));
			})
			
      .catch(e => {
        console.log(e);
      });
	};

	// deleteItem = (id) => {
	// 	console.log(id);
	// 	fetch(`${this.props.authService.domain}/feed/posts/${id}`, {
	// 		method: "DELETE",
	// 		headers: {"Content-Type": "application/json"},
	// 		body: JSON.stringify(id)
	// 	})
	// 	.then((posts) => {
  //     this.setState((oldState) => {
	// 			const newState = Object.assign({}, oldState);
  //       newState.posts = posts.reduce((postsReduced, post) => {
	// 					if (post.hasOwnProperty('id') !== id) {
	// 						postsReduced.push(post);
	// 					}
	// 				return postsReduced;
	// 			}, []);
  //       return newState;
  //     });
  //   })
	// }


	

  render() {
		const listComments = this.state.posts.map((posts, i) => {
			return <FeedItem 
				id={posts._id}
				title={posts.title}
				content={posts.content}
				name={posts.creator.name}
				date={posts.createdAt}
				key={i}
				{...this.props}
				deleteComment={this.deleteItem}
			/>
		})
    return <div>
			<h1>This is your posts</h1>
				{listComments}
			</div>
		
  }
}

export default Feed;