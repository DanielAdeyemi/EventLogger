import React from 'react';
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      postTitle: event.target.postTitle.value,
      postAuthor: event.target.postAuthor.value,
      postContent: event.target.postContent.value,
      id: v4()
    });
  }
  return(
    <>
      <ReusableForm 
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Boom!"
      />
    </>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};
