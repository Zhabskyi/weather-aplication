import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './FeedItem.module.css';

import Button, { TYPES } from '../../UI/button/Button';

const FeedItem = (props) => {
	const date = new Date(props.date).toLocaleString();
	return (
		<div className={classes.FeedItem} id={props.id}>
			<div>
				<h4>{props.title}</h4>
				<p>{props.content}</p>
			</div>
			<div className={classes.Author}>
				<span>{props.name}</span>
				<span>{date}</span>
			</div>
			<div className={classes.buttons}>
			<Button 
				title={'EDIT'} 
				type={ TYPES.primary }
				onClick={props.editComment}/>
			<Button 
				title={'DELETE'} 
				type={ TYPES.warn }
				onClick={props.deleteComment}/>
			</div>
			
		</div>
	)
}

export default withRouter(FeedItem);
