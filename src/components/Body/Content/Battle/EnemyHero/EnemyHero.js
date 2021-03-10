import React from 'react';
import CharacterEnemy from '../../../../common/CharacterBody/CharacterEnemy';
import InfoString from '../../../../common/InfoString/InfoString';
import classes from './EnemyHero.module.css'

const EnemyHero = ({enemy, playerDamage}) => {
  return <>
    <div className={classes.name}>
      <span>{enemy.name}</span>
    </div>
    <CharacterEnemy enemy={enemy} playerDamage={playerDamage}/>
    <div className={classes.box}>
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
    </div>
  </>
}

export default EnemyHero;