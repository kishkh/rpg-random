import React from 'react';

import classes from './CharacterBox.module.css'

const CharacterBox = (props) => { 
  let actionClass = props.checkClass === props.weapon ?
  classes.block : classes.damage
  return (
    <div className={classes.box}>
      <div 
        className={
          props.item === props.checkClass ?
          `${props.item} ${actionClass} ` : props.item
        } 
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  )
}

export default CharacterBox;