import React from 'react';
import './profileIco.css'
import classes from './Profile.module.css'
import CharacterUser from '../../../common/CharacterBody/CharacterUser';
const Profile = (props) => {
  const skillUpAttack = () => {
    props.skillUp(props.profile.attack + 1, props.profile.defence)  
  }
  const skillUpDefence = () => {
    props.skillUp(props.profile.attack, props.profile.defence + 1)    
  }
  return <div className={classes.container}>
    <div className={classes.boxBody}>
      <CharacterUser items={props.profile.items} />  
      <div className={classes.selector}></div>
    </div>
    <div className={classes.box}>
      <div className={classes.row}>
        <div className='ico_name'></div>
        <span>{props.profile.name}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_lvl'></div>
        <span>{props.profile.lvl}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_exp'></div>
        <span>{props.profile.exp.current}/{props.profile.exp.nextLvl}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_attack'></div>
        <span>{props.profile.attack}</span>
        {
          props.profile.skill > 0 && 
          <button onClick={skillUpAttack}>+{props.profile.skill}</button>}

      </div>
      <div className={classes.row}>
        <div className='ico_defence'></div>
        <span>{props.profile.defence}</span>
        {
          props.profile.skill > 0 &&
          <button onClick={skillUpDefence}>+{props.profile.skill}</button>
        }
      </div>
      <div className={classes.row}>
        <div className='ico_damage'></div>
        <span>{props.profile.damage.min}-{props.profile.damage.max}</span>
      </div>

      <div className={classes.row}>
        <div className='ico_hp'></div>
        <span>{props.profile.hp.current}/{props.profile.hp.full}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_coin'></div>
        <span>{props.profile.stats.coins}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_record'></div>
        <span>{props.profile.stats.win}-{props.profile.stats.lose}</span>
      </div>


      <div className={classes.row}>
        <div className='ico_killed'></div>
        <span>{props.profile.stats.killed}</span>
      </div>

    </div>

  </div>
}

export default Profile;