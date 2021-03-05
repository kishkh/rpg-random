import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import classes from './CreatePlayer.module.css'
import ItemBox from '../../../common/ItemBox/ItemBox';
import FormContainer from '../../../common/Form/FormContainer';
const CreatePlayer = (props) => {

  

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <FormContainer createHero={props.createHero}/>
      </div>
    </div>
  )


}


export default CreatePlayer;
