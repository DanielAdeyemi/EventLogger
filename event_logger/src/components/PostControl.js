import React from 'react';
import NewPostForm from './NewPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';

export default class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null
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

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost})
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to the List of Posts";
    } else {
      currentlyVisibleState = 
        <PostList 
          postList={this.state.mainPostList} 
          onPostSelection={this.handleChangingSelectedPost}
        />;
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
