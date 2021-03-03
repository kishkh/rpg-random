import React from 'react';
import { useForm } from "react-hook-form";
import classes from './CreatePlayer.module.css'
const CreatePlayer = (props) => {
  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='text' placeholder='name' name='name' ref={register}></input>
          <input type='color'></input>
          <select name='select' ref={register}>
            <option value="20">20</option>
            <label for=''></label>
            <option className='button_kill' value="22">
              
            </option>
            <option value="30">30</option>
            <option value="32">30</option>
          </select>
          <input></input>
          <input></input>
          <input></input>
          <input type='submit'></input>
        </form>
      </div>
    </div>
  )


}


export default CreatePlayer;
