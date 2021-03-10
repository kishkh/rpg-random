import React from 'react';

import classes from './InfoString.module.css';

const InfoString = (props) => {
  return (
    <div className={classes.row}>
      <div className={props.icon}></div>
      <span>{props.text}</span>
    </div>
  )
}
export default InfoString;