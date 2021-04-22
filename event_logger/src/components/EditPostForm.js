import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function EditPostForm(props) {
	const { post } = props;
	function handleEditPostFormSubmission(event) {
		event.preventDefault();
		props.onEditPost({
			postTitle: event.target.postTitle.value,
			postAuthor: event.target.postAuthor.value,
			postContent: event.target.postContent.value,
			id: post.id,
		});
	}
	return (
		<>
			<ReusableForm
				formSubmissionHandler={handleEditPostFormSubmission}
				buttonText="Update this Event"
			/>
		</>
	);
}

EditPostForm.propTypes = {
	post: PropTypes.object,
	onEditPost: PropTypes.func,
};
