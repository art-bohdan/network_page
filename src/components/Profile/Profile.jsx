import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
  debugger;
  return (
    <div className=''>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} updateNewPostText={props.updateNewPostText} />
    </div>
  );
};

export default Content;
