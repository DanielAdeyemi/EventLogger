import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return(
    <>
      <div onClick = {() => props.whenPostClicked(props.id)}>
      <h2> {props.postTitle} </h2>
      <h4><i> {props.postAuthor} </i></h4>
      <p> {props.postContent} </p>
    </div>
    </>
  );
}

Post.propTypes = {
  postTitle: PropTypes.string.isRequired,
  postAuthor: PropTypes.string,
  postContent: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func
};
