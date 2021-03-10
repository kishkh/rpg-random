import React from 'react';

import FormCreateHero from '../../../common/Form/FormCreateHero';
import classes from './CreatePlayer.module.css';

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
