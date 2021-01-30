import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div>
        <div className={classes.item}>
          {props.message}
        </div>
        <div>
          <span>like</span> {props.likeCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
