import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = React.memo(props => {
  console.log('profile')
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateUsersStatus={props.updateUsersStatus} />
      <MyPostsContainer />
    </div>
  );
});


export default Profile;
