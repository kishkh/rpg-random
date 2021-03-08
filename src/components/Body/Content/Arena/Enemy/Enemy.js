import React from 'react';
import { NavLink } from 'react-router-dom';
import CharacterEnemy from '../../../../common/CharacterBody/CharacterEnemy';
import classes from './Enemy.module.css'

const Enemy = ({ enemy }) => {
  return <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <CharacterEnemy enemy={enemy} />

        <div className={classes.row}>
          <div className='ico_name'></div>
          <span>{enemy.name}</span>
        </div>
        <div className={classes.row}>
          <div className='ico_lvl'></div>
          <span>{enemy.lvl}</span>
        </div>
        <div className={classes.row}>
          <div className='ico_damage'></div>
          <span>{enemy.damage.min}-{enemy.damage.max}</span>
        </div>
        <div className={classes.row}>
          <div className='ico_hp'></div>
          <span>{enemy.hp.current}-{enemy.hp.full}</span>
        </div>
        <div className={classes.row}>
          <div className='ico_coin'></div>
          <span>{enemy.result.coinLeave}/{enemy.result.coinWin}/{enemy.result.coinKill}</span>
        </div>
        <div className={classes.row}>
          <div className='ico_exp'></div>
          <span>{enemy.result.expLeave}/{enemy.result.expWin}/{enemy.result.expKill}</span>
        </div>
        <div className={classes.btnContainer}>
          <NavLink to={`/battle/${enemy.id}`}>
            <button>Fight</button>
          </NavLink>
        </div>
      </div>
    </div>

  </div>
}
// link + id 
export default Enemy;
