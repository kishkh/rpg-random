import React from 'react';
import CharacterEnemy from '../../../../common/CharacterBody/CharacterEnemy';
import classes from './EnemyHero.module.css'

const EnemyHero = (props) => {
  return <>
    <div className={classes.row}>
      <span>{props.enemy.name}</span>
    </div>
    <CharacterEnemy enemy={props.enemy} />
    <div className={classes.box}>
      <div className={classes.row}>
        <div className='ico_hp'></div>
        <span>{props.enemy.hp.current}/{props.enemy.hp.full}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_damage'></div>
        <span>{props.enemy.damage.min}-{props.enemy.damage.max}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_coin'></div>
        <span>{props.enemy.result.coinLeave}/{props.enemy.result.coinWin}/{props.enemy.result.coinKill}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_exp'></div>
        <span>{props.enemy.result.expLeave}/{props.enemy.result.expWin}/{props.enemy.result.expKill}</span>
      </div>
    </div>
  </>
}

export default EnemyHero;