import React from 'react';
import Post from "./Post";
import PropTypes from "prop-types";

export default function PostList(props) {
  return(
    <>
      {props.postList.map((post) =>
      <Post
        whenPostClicked={props.onPostSelection}
        postTitle={post.postTitle}
        postAuthor={post.postAuthor}
        postContent={post.postContent}
        id={post.id}
        key={post.id}
      />
      )}
    </>
  );
}

PostList.propTypes = {
  postList: PropTypes.array,
  onPostSelection: PropTypes.func
};
