import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

  let onAddPost = (values) => {
      props.addPost(values.newPostText);
    };

  return (
    <div className={classes.postBlock}>
        <h3>My posts</h3>
        <div><AddPostFormRedux onSubmit={onAddPost}/></div>
      <div>{props.posts.map((post) => <Post message={post.message} key={post.id} likeCount={post.likeCount} />)}</div>
    </div>
  );
};


const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit }>
      <div><Field component={'textarea'} name={'newPostText'} placeholder='enter your post'/></div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({
  form: 'addPostForm'
})(AddPostForm)

export default MyPosts;




