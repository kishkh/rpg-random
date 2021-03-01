import React from 'react';
import CharacterUser from '../../../common/CharacterBody/CharacterUser';
import classes from './Crypt.module.css'

const Crypt = ({ heroes }) => {
  const heroesList = heroes.length > 0 ? heroes.map(hero => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <CharacterUser  player={hero} />
        </div>
        <div className={classes.box}>
          <div className={classes.row}>
            <div className='ico_name'></div>
            <span>{hero.name}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_lvl'></div>
            <span>{hero.lvl}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_exp'></div>
            <span>{hero.exp.current}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_attack'></div>
            <span>{hero.attack}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_defence'></div>
            <span>{hero.defence}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_damage'></div>
            <span>{hero.damage.min / 2}-{hero.damage.max / 2}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_hp'></div>
            <span>{hero.hp.full}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_record'></div>
            <span>{hero.stats.win}-{hero.stats.lose}</span>
          </div>
          <div className={classes.row}>
            <div className='ico_killed'></div>
            <span>{hero.stats.killed}</span>
          </div>
        </div>
      </div>
    )
  }
  ) : ['Still nobody dead']
  return <div className={classes.container}>
    {heroesList}
  </div>
}

export default Crypt;