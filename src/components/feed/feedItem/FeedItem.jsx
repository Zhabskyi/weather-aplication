import React from 'react';
import { withRouter } from 'react-router-dom';

const FeedItem = (props) => {
	console.log(props);
	return (
		<div id={props.id}>
			<div>
				<h1>{props.title}</h1>
				<p>{props.content}</p>
			</div>
			<div>
				<span className = "">{props.name}</span>
				<span className = "">{Date(props.date)}</span>
			</div>
			<div>
				<button 
					onClick={props.deleteComment}
					className=''>DELETE</button>
			</div>
			
		</div>
	)
}

export default withRouter(FeedItem);
