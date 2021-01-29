import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to='/about' activeClassName={classes.active}>
          About
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/users' activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
