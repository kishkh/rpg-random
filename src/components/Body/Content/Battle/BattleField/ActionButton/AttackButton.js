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
      <div className={props.img}></div>
    </button>
  )
}

export default AttackButton;