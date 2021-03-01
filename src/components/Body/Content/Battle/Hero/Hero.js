import React from 'react';
import CharacterUser from '../../../../common/CharacterBody/CharacterUser';
import classes from './Hero.module.css'

const Hero = ({player, enemyDamage}) => {
  return <>
    <div className={classes.row}>
      <span>{player.name}</span>
    </div>
    <CharacterUser enemyDamage={enemyDamage} player={player} />
    <div className={classes.box}>
      <div className={classes.row}>
        <div className='ico_hp'></div>
        <span>{player.hp.current}/{player.hp.full}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_damage'></div>
        <span>{player.damage.min}-{player.damage.max}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_record'></div>
        <span>{player.stats.win}-{player.stats.lose}</span>
      </div>
      <div className={classes.row}>
        <div className='ico_killed'></div>
        <span>{player.stats.killed}</span>
      </div>  
    </div>
  </>
}

export default Hero;
