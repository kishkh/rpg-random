import React from 'react';
import CharacterUser from '../../../../common/CharacterBody/CharacterUser';
import InfoString from '../../../../common/InfoString/InfoString';
import classes from './Hero.module.css'

const Hero = ({ player, enemyDamage, profile }) => {
  let enemies = profile.stats.killed.length > 0 ?
    profile.stats.killed.map((enemy, i) => {
      return (
        <div key={`${i} head`} className={classes.icoContainer} >
          <div className={`${enemy} ${classes.ico}`} />
        </div>
      )
    }) : []
  return <>
    <div className={classes.row}>
      <span>{player.name}</span>
    </div>
    <CharacterUser enemyDamage={enemyDamage} player={player} />
    <div className={classes.box}>
      <InfoString icon='ico_hp' text={`${player.hp.current}/${player.hp.full}`} />
      <InfoString icon='ico_damage' text={`${player.damage.min}-${player.damage.max}`} />
      <InfoString icon='ico_record' text={`${player.stats.win}-${player.stats.lose}`} />
      <div className={classes.row}>
        <InfoString icon='ico_killed' text={enemies.length === 0 ? 0 : false} />
        <div className={classes.killContainer}>
          {enemies.length > 0 ? enemies : false}
        </div>
      </div>
    </div>
  </>
}

export default Hero;
