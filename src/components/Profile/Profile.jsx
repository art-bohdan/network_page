import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
  debugger;
  return (
    <div className=''>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Content;
