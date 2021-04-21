import React from 'react';
import Post from "./Post"

const mainPostList = [
  {postTitle: "Samson Night"},
  {postTitle: "Woody U. No"},
  {postTitle: "Mary Thonn"},
  {postTitle: "Joanna Hand"},
  {postTitle: "Harry Legg"},
  {postTitle: "Tim Burr"},
  {postTitle: "Don Thatt"},
  {postTitle: "Sawyer B. Hind"},
  {postTitle: "I. Ron Stomach"},
  {postTitle: "Jan U. Wharry"},
  {postTitle: "Andy Gravity"},
  {postTitle: "Diane Toluvia"},
  {postTitle: "Rusty Keyes"},
  {postTitle: "Seymour Legg"},
  {postTitle: "Harmon Ikka"}
]

export default function PostList() {
  return(
    <>
      {mainPostList.map((post, index) =>
      <Post
        postTitle={post.postTitle}
      />
      )}
    </>
  );
}
