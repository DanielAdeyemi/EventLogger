import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props) {
  return(
    <>
      <form onSubmit={props.formSubissionHandler}>
        <input type="text" name="postTitle" placeholder="Title of the event" required />
        <input type="text" name="postAuthor" placeholder="Your Name" required />
        <textarea name="postContent" placeholder="Tell us about your event..." />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};
