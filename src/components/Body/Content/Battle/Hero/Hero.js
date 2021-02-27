import React from 'react';
import CharacterUser from '../../../../common/CharacterBody/CharacterUser';
import classes from './Hero.module.css'

const Hero = (props) => {


  return <>
    <div className={classes.row}>
      <span>{props.player.name}</span>
    </div>
    <CharacterUser 
      items={props.player.items}
      action={props.player.action}
    />
    <div className={classes.box}>
      <div className={classes.row}>
        <div className='ico_hp'></div>
        <span>{props.player.hp.current}/{props.player.hp.full}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_damage'></div>
        <span>{props.player.damage.min}-{props.player.damage.max}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_record'></div>
        <span>{props.player.stats.win}-{props.player.stats.lose}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_killed'></div>
        <span>{props.player.stats.killed}</span>
      </div>  
    </div>
  </>
}

export default Hero;
