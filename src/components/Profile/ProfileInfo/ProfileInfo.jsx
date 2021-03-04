import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={classes.background}>
        <img
          src='https://elearningindustry.com/wp-content/uploads/2015/10/learning-technologies-fundamentals-part-1.jpg'
          alt='background'
        />
      </div>
      <div className={classes.descriptionBlock}>
        <div>
          <img src={props.profile.photos.large} alt='avatar' />
          <ProfileStatusWithHooks
            status={props.status}
            updateUsersStatus={props.updateUsersStatus}
          />
          <p>Full Name: {props.profile.fullName}</p>
          <p>About me: {props.profile.aboutMe}</p>
        </div>
        <div>
          <p>{props.profile.contacts.github}</p>
          <p>{props.profile.contacts.instagram}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
