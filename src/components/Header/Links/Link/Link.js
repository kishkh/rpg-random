import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Link.module.css';

const Link = (props) => {
  return (
    <NavLink to={props.link} activeClassName={classes.active} className={classes.link}>
      <div className={props.icon}>
      </div>
      <span className={classes.text}>{props.text}</span>
    </NavLink>
  )
}

export default Link;