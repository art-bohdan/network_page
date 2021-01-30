import React from 'react';
// import classes from './Music.module.css';

const Music = (props) => {
  let aboutMusic = React.createRef();
  let pubMusic = () => {
    let text = aboutMusic.current.value;
    alert(text);
  };

  return (
    <div>
      <div>Music</div>
      <div>
        <textarea ref={aboutMusic}>some about music</textarea>
      </div>
      <div>
        <button onClick={pubMusic}>public music</button>
      </div>
    </div>
  );
};

export default Music;
