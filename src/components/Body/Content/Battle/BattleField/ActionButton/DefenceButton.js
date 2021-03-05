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
      <div className={props.img}/>
    </button>
  )
}

export default DefenceButton;