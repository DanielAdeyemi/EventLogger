import React from 'react';
import ReusableForm from "./ReusableForm";

export default function EditPostForm(props) {
  const { post } = props;
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      postTitle: event.target.postTitle.value,
      postAuthor: event.target.postAuthor.value,
      postContent: event.target.postContent.value,
      id: post.id
    });
  }
  return(
    <>
      <ReusableForm buttonText="Update this Event" />
    </>
  );
}
