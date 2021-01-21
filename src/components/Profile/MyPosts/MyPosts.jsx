import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = props => {
  let postsElement = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount} />);

  let newPost = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  };

  let onPostChange = () => {
    let text = newPost.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  };

  return (
    <div className={classes.postBlock}>
      <div>
        <h3>My posts</h3>
      </div>
      <div>
        <textarea ref={newPost} onChange={onPostChange} value={props.newPostText} />
      </div>
      <div>
        <button onClick={addPost}>Send message</button>
      </div>
      <div>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
