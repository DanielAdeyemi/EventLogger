import React from 'react';
import PropTypes from "prop-types";

export default function PostDetail(props) {
  const { post, onClickingDelete } = props;
  return (
    <>
      <h2>Post Detail</h2>
      <h4>{post.postTitle}</h4>
      <h5><i>Authored by: {post.postAuthor}</i></h5>
      <p>{post.postContent}</p>
      <button onClick={()=>onClickingDelete(post.id)}>No need in this event anymore!</button>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func
};