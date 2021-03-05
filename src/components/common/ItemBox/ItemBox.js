import React from 'react';
import classes from './ItemBox.module.css'
import '../../../assets/classes/basicItems.css'
const ItemBox = (props) => {
  return (
    <div className={props.active ? `${classes.box} ${classes.active}` : classes.box}>
      <div
        className={ props.item } 
        style={{ backgroundColor: props.color }}
      ></div>
    </div>
  )
}

export default ItemBox;