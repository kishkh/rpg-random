import React from 'react';

const AttackButton = (props) => {
  return (
    <button 
      onClick={() => { props.action(props.case) }} 
      className={
        props.attackMode ? 
        props.classes.attack : 
        `${props.classes.attack} ${props.classes.hide}`
      }
    >
      <img className={props.classes.img} alt='A' src={props.img}></img>
    </button>
  )
}

export default AttackButton;