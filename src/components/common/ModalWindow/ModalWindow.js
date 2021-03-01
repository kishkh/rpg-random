import React from 'react';
import './ModalWindow.css'
const ModalWindow = (props) => {
  
  return (
    <div 
      className={props.active ? 'container-modal_window container-modal_window__active' : 'container-modal_window'} 
      onClick={(e => e.stopPropagation())}
    >
      <div 
        className={props.active ? 'content-modal_window content-modal_window__active' : 'content-modal_window'}
      > 
        {props.children} 
      </div>
    </div>
  )
}

export default ModalWindow;