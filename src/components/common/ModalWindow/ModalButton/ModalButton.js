import React from 'react';
import classes from './ModalButton.module.css'; 
const ModalButton = (props) => {
  return (

    <button className={classes.button} onClick={() => {console.log('ssss');  props.event()}}>{props.name}
      <div className={props.ico}>
        
      </div>
    </button>
  )
}

export default ModalButton;