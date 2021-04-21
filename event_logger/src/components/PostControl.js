import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

export default class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList = []
    };
  }

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      mainPostList: newMainPostList,
      formVisibleOnPage: false
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to the List of Posts";
    }
  return(
    <>
      {currentlyVisibleState}
      <button>{buttonText}</button>
    </>
  )
  };
}