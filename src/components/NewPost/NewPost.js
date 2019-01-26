import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        name: 'Oleksandr',
        submitted: false
    }

    // componentDidMount () {
    //     // If unauth => this.props.history.replace('/posts');
    //     console.log( this.props );
    // }

    onSubmit = (e) => {
			e.preventDefault();
			const token = localStorage.getItem("token");
			const formData = new FormData();
			formData.append = ('title', this.state.title);
			formData.append = ('content', this.state.content);
			//formData.append = ('name', this.state.name);
			fetch('https://rest-node-course-api.herokuapp.com/feed/post', {
				method: 'POST',
    		body: formData,
    		headers: {
					Authorization: 'Bearer ' + token
				}		
			})
				//.then(resp => resp.json())
				.then( response => {

						console.log( response );
						console.log( token );
						//this.props.history.replace('/posts');
					// this.setState( { submitted: true } );
				} )
				.catch(e => console.log(e));
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />;
        }
        return (
            <form className="NewPost" onSubmit={this.onSubmit}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={( event ) => this.setState( { title: event.target.value } )} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={( event ) => this.setState( { content: event.target.value } )} />
                <label>Author</label>
                <select value={this.state.name} onChange={( event ) => this.setState( { author: event.target.value } )}>
                    <option value="Unknown">Unknown</option>
                    <option value={this.state.name}>{this.state.name}</option>
                </select>
                <button>Add Post</button>
            </form>
        );
    }
}

export default NewPost;