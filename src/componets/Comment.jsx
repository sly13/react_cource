import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
	return (
		<p>{comment.text} <br /><b>{comment.user} </b></p>
	);
}

Comment.prototype = {
	comment: PropTypes.shape({
		text: PropTypes.string.isRequired,
		user: PropTypes.string.isRequired
	}).isRequired
}

export default Comment;
