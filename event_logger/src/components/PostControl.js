import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";

export default class PostControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false,
			mainPostList: [],
			selectedPost: null
		};
	}

	handleClick = () => {
		// toggle views between pages using button
		if (this.state.selectedPost !== null) {
			this.setState({
				formVisibleOnPage: false,
				selectedPost: null
			});
		} else {
			this.setState((prevState) => ({
				formVisibleOnPage: !prevState.formVisibleOnPage,
			}));
		}
	};

	handleAddingNewPostToList = (newPost) => {
		const newMainPostList = this.state.mainPostList.concat(newPost);
		this.setState({
			mainPostList: newMainPostList,
			formVisibleOnPage: false
		});
	};

	handleChangingSelectedPost = (id) => {
		const selectedPost = this.state.mainPostList.filter((post) => post.id === id)[0];
		this.setState({ selectedPost: selectedPost });
	};

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }

	render() {
		let currentlyVisibleState = null;
		let buttonText = null;
		if (this.state.selectedPost !== null) {
			currentlyVisibleState = 
        <PostDetail   
          post={this.state.selectedPost} 
          onClickingDelete = {this.handleDeletingPost} 
        />;
			buttonText = "Return to the List of Posts";
		} else if (this.state.formVisibleOnPage) {
			currentlyVisibleState = (
				<NewPostForm onNewPostCreation={this.handleAddingNewPostToList} />
			);
			buttonText = "Return to the List of Posts";
		} else {
			currentlyVisibleState = (
				<PostList
					postList={this.state.mainPostList}
					onPostSelection={this.handleChangingSelectedPost}
				/>
			);
			buttonText = "Add Post";
		}
		return (
			<>
				{currentlyVisibleState}
				<button onClick={this.handleClick}>{buttonText}</button>
			</>
		);
	}
}
