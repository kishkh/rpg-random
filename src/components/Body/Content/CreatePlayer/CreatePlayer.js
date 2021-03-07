import React from 'react';
import classes from './CreatePlayer.module.css'
import FormCreateHero from '../../../common/Form/FormCreateHero';
const CreatePlayer = (props) => {

  

  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <FormCreateHero createHero={props.createHero}/>
      </div>
    </div>
  )


}


export default CreatePlayer;
