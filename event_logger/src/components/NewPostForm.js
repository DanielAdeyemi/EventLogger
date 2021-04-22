import React from 'react';
import PropTypes from "prop-types";
import { v4 } from "uuid";

export default function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      postTitle: event.target.postTitle.value,
      postAutor: event.target.postAuthor.value,
      postContent: event.target.postContent.value,
      id: v4()
    });
  }
  return(
    <>
      <form onSubmit={handleNewPostFormSubmission}>
        <input type="text" name="postTitle" placeholder="Title of the event" required />
        <input type="text" name="postAuthor" placeholder="Your Name" required />
        <textarea name="postContent" placeholder="Tell us about your event..." />
        <button type="submit">Boom!</button>
      </form>
    </>
  );
}
