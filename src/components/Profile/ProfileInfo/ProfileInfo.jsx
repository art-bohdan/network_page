import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.profileInfo}>
      <div>
        <img
          src='https://elearningindustry.com/wp-content/uploads/2015/10/learning-technologies-fundamentals-part-1.jpg'
          alt='background'
        />
      </div>
      <div className={classes.descriptionBlock}>avatar + nickname</div>
    </div>
  );
};

export default ProfileInfo;
