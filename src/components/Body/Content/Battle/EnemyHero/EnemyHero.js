import React from 'react';
import CharacterEnemy from '../../../../common/CharacterBody/CharacterEnemy';
import classes from './EnemyHero.module.css'

const EnemyHero = ({enemy, playerDamage}) => {
  return <>
    <div className={classes.row}>
      <span>{enemy.name}</span>
    </div>
    <CharacterEnemy enemy={enemy} playerDamage={playerDamage}/>
    <div className={classes.box}>
      <div className={classes.row}>
        <div className='ico_hp'></div>
        <span>{enemy.hp.current}/{enemy.hp.full}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_damage'></div>
        <span>{enemy.damage.min}-{enemy.damage.max}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_coin'></div>
        <span>{enemy.result.coinLeave}/{enemy.result.coinWin}/{enemy.result.coinKill}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_exp'></div>
        <span>{enemy.result.expLeave}/{enemy.result.expWin}/{enemy.result.expKill}</span>
      </div>
    </div>
  </>
}

export default EnemyHero;