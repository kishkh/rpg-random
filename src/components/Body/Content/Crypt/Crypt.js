import React from 'react';

import CharacterUser from '../../../common/CharacterBody/CharacterUser';
import InfoString from '../../../common/InfoString/InfoString';
import classes from './Crypt.module.css';

const Crypt = ({ heroes, ...props }) => {
  const heroesList = heroes.length > 0 ? heroes.map((hero, i) => {
    let enemies = hero.stats.killed.length > 0 ?
    hero.stats.killed.map((enemy, i) => {
      return (
        <div key={`${i} head`} className={classes.icoContainer} >
          <div className={`${enemy} ${classes.ico}`} />
        </div>
      )
    }) : []
    return (
      <div key={`${i + 1}crypt`} className={classes.wrapper}>
        <div className={classes.box}>
          <CharacterUser player={hero} />
        </div>
        <div className={classes.box}>
          <InfoString icon='ico_name' text={hero.name} />
          <InfoString icon='ico_lvl' text={hero.lvl} />
          <InfoString icon='ico_exp' text={hero.exp.current} />
          <InfoString icon='ico_damage' text={`${hero.damage.min}-${hero.damage.max}`} />
          <InfoString icon='ico_hp' text={hero.hp.full} />
          <InfoString icon='ico_date' text={hero.date} />
          <InfoString icon='ico_record' text={`${hero.stats.win}-${hero.stats.lose}`} />
          <div className={classes.row}>
            <InfoString icon='ico_killed' text={enemies.length === 0 ? 0 : false} />
            <div className={classes.killContainer}>
              {enemies.length > 0 ? enemies : false}
            </div>
          </div>
        </div>
      </div>
    )
  }) : ['Still nobody dead']
  
  return <div className={classes.container}>
    <div className={classes.btnContainer}>
      <span>Sort by:</span>
      <button onClick={props.sortByDate}>Date</button>
      <button onClick={props.sortByExp}>Experience</button>
      <button onClick={props.sortByKills}>Kills</button>
    </div>
    {heroesList}
  </div>
}

export default Crypt;