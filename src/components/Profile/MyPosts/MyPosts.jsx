import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../helpers/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10)
const MyPosts = (props) => {
  let onAddPost = (values) => {
      props.addPost(values.newPostText);
    };
  console.log('render yo')

  return (
    <div className={classes.postBlock}>
        <h3>My posts</h3>
        <div><AddPostForm onSubmit={onAddPost}/></div>
      <div>{props.posts.map((post) => <Post message={post.message} key={post.id} likeCount={post.likeCount} />)}</div>
    </div>
  );
};


let AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit }>
      <div><Field component={Textarea} name={'newPostText'} placeholder='enter your post message' validate={[required, maxLength10]}/></div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

AddPostForm = reduxForm({
  form: 'addPostForm'
})(AddPostForm)

export default MyPosts;




