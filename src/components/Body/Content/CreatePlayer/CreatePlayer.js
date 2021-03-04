import React from 'react';
import { useFormik } from 'formik';
import classes from './CreatePlayer.module.css'
import { Link, NavLink } from 'react-router-dom';
const CreatePlayer = (props) => {

  const formik = useFormik({
    initialValues: {
      name: 'Name',
      color: '#84DAB4',
    },
    onSubmit: values => {
      props.createHero(values.name, values.color)
      console.log('AAs')

    }
  })
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} ></input>
          <label >Skin color</label>
          <label className='baby_face' style={{ backgroundColor: formik.values.color }} htmlFor='color'></label>
          <input type='color' id='color' name='color' onChange={formik.handleChange} value={formik.values.color} ></input>
          <button id='button' type='submit' >
            Create
          </button>
        </form>
      </div>
    </div>
  )


}


export default CreatePlayer;
