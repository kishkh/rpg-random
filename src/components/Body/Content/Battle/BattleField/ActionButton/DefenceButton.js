import React from 'react';

const DefenceButton = (props) => {
  return (
    <button 
      onClick={() => { props.action(props.case, props.hp) }} 
      className={
        props.attackMode ? 
        `${props.classes.defence} ${props.classes.hide}` : 
        props.classes.defence
      }
    >
      <img className={props.classes.img} src={props.img} alt='D'></img>
    </button>
  )
}

export default DefenceButton;