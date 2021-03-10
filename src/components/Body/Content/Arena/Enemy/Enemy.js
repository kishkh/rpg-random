import React from 'react';
import { NavLink } from 'react-router-dom';
import CharacterEnemy from '../../../../common/CharacterBody/CharacterEnemy';
import InfoString from '../../../../common/InfoString/InfoString';
import classes from './Enemy.module.css'

const Enemy = ({ enemy, ...props }) => {
  return <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <CharacterEnemy enemy={enemy} />
        <InfoString icon='ico_name' text={`${enemy.name}`} />
        <InfoString icon='ico_lvl' text={`${enemy.lvl}`} />
        <InfoString
          icon='ico_hp'
          text={`${enemy.hp.current}/${enemy.hp.full}`}
        />
        <InfoString
          icon='ico_damage'
          text={`${enemy.damage.min}-${enemy.damage.max}`}
        />
        <InfoString
          icon='ico_coin'
          text={
            `${enemy.result.coinLeave}/
          ${enemy.result.coinWin}/
          ${enemy.result.coinKill}`
          }
        />
        <InfoString
          icon='ico_exp'
          text={
            `${enemy.result.expLeave}/
          ${enemy.result.expWin}/
          ${enemy.result.expKill}`
          }
        />
        <div className={classes.btnContainer}>
          <NavLink to='/battle'>
            <button onClick={() => { props.startFightEnemy(enemy.id) }}>Fight</button>
          </NavLink>
        </div>
      </div>
    </div>
  </div>
}
export default Enemy;
