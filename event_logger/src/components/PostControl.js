import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";

export default class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: []
    };
  }

  handleClick = () => { // toggle views between pages using button
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
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
    } else {
      currentlyVisibleState = (<PostList postList={this.state.mainPostList} />);
      buttonText = "Add Post";
    }
  return(
    <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </>
  )
  };
}
