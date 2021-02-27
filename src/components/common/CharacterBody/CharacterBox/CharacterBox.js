import React from 'react';
import classes from './CharacterBox.module.css'

const CharacterBox = (props) => {
  return (
    <div className={classes.box}>
      <div className={props.item} style={{backgroundColor: props.color}}></div>
    </div>
  )
}

export default CharacterBox;