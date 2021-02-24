//import React from 'react';
import MyPosts from './MyPosts';
import {addPost} from '../../../redux/profileReducer';
import {connect} from 'react-redux';

// when changes in state occur, the function is triggered
//create new object, the old object is compared with the new one
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPost(newPostText));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
