import React from 'react';
import FormKill from '../Form/FormKill';
import ModalTitle from './ModalTitle/ModalTitle';
import './ModalWindow.css'
const ModalWindow = (props) => {

  return (
    <div
      className={
        props.active ? 
        'container-modal_window container-modal_window__active' : 'container-modal_window'
      }
      onClick={(e => e.stopPropagation())}
    >
      <div
        className={
          props.active ? 
          'content-modal_window content-modal_window__active' : 'content-modal_window'
        }
      >
        <ModalTitle text={props.text} />
        <FormKill 
          enemy={props.enemy} 
          takeItem={props.takeItem} 
          ico={props.ico} 
          kill={props.kill}
        />
      </div>
    </div>
  )
}

export default ModalWindow;