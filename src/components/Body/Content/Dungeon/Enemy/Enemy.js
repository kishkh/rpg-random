import React from 'react';
import { NavLink } from 'react-router-dom';
import CharacterEnemy from '../../../../common/CharacterBody/CharacterEnemy';
import classes from './Enemy.module.css'

const Enemy = (props) => {
  return <div className={classes.container}>
    <CharacterEnemy enemy={props.enemy} />
    <span>name: {props.enemy.name}</span>
    <span>hp: {props.enemy.hp.current}/{props.enemy.hp.full}</span>
    <span>damage: {props.enemy.damage.min}-{props.enemy.damage.max}</span>
    {/* <span>gold: {props.enemy.gold.win}/{props.enemy.gold.kill} </span>
    <span>exp: {props.enemy.exp.win}/{props.enemy.exp.kill} </span> */}
    <NavLink to='/battle'>
      <button>Fight</button>
    </NavLink>
    
  </div>
}

export default Enemy;