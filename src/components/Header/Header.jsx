import React from 'react';
import classes from '../Header/Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src='https://hatfieldmedia.com/wp-content/uploads/2019/05/Hatfield-Website-Circular-Icons4.png'
        alt='logo'
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>{props.login}<button onClick={props.logout}>Logout</button></div>
        ) : (
          <NavLink to={'/login'}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
