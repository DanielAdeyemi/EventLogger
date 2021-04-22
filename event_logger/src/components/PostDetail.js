import React from 'react';
import PropTypes from "prop-types";

export default function PostDetail(props) {
  const {post} = props;
  return (
    <>
      <h2>Post Detail</h2>
      <h4>{post.postTitle}</h4>
      <h5><i>Authored by: {post.postAuthor}</i></h5>
      <p>{postContent}</p>
    </>
  );
}

PostDetail.PropTypes = {
  post: PropTypes.object
};