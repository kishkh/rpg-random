import React from 'react';
import classes from './ModalTitle.module.css'; 
const ModalTitle = (props) => {
  return (
    <span className={classes.container}>
      {props.text}
    </span>
  )
}

export default ModalTitle;