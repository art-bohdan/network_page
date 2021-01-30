import React from 'react';
// import classes from './About.module.css';

const About = (props) => {
  let aboutPost = React.createRef();
  let publicPost = () => {
    let pub = aboutPost.current.value;
    alert(pub);
  };

  return (
    <div>
      <div>About Us</div>
      <div>
        <textarea ref={aboutPost}>some text</textarea>
      </div>
      <div>
        <button onClick={publicPost}>Post</button>
      </div>
    </div>
  );
};

export default About;
