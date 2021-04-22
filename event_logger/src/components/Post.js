import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return(
    <>
      <div onClick = {() => props.whenPostClicked(props.id)}>
      <h2> {props.postTitle} by <i> {props.postAuthor} </i> </h2>
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
