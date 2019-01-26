import React, { Component } from 'react';

import classes from './Feed.module.css';


import FeedItem from './feedItem/FeedItem';
import Button, { TYPES } from '../UI/button/Button';
import Spinner from '../UI/Spinner/Spinner';
import Modal from '../UI/Modal/Modal';
import NewPost from '../NewPost/NewPost';


export class Feed extends Component {
  constructor() {
    super();
    this.state = {
			posts: [],
			loading: false,
			addingPost: false
		}
	}
		
		componentDidMount() {
			this.setState({loading: true});
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
			.then(resp => {
				this.setState({loading: false});
			})
      .catch(e => {
        console.log(e);
      });
	};

	// deleteItem = (id) => {
	// 	console.log(id);
	// 	fetch(`${this.props.authService.domain}/posts/${id}`, {
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

	addPostCancelHandler = () => {
		this.setState({addingPost: false});
	}

	addComment = () => {
		this.setState({addingPost: true});
	}


	

  render() {
		let listComments = null;

		if (this.state.loading) {
			listComments = <Spinner />;
		} else {
			listComments = this.state.posts.map((posts, i) => {
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
			});
		}

    return <div className={classes.Feed}>
			<Modal show={this.state.addingPost} modalClosed={this.addPostCancelHandler}>
				<NewPost/>
			</Modal>
			<h3>Posts</h3>
			<Button 
				className={classes.btn}
				title={'ADD COMMENT'} 
				type={ TYPES.default }
				onClick={this.addComment}/>
				{listComments}
			</div>
		
  }
}

export default Feed;