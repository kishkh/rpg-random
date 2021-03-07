import React from 'react';
import CharacterUser from '../../../common/CharacterBody/CharacterUser';
import InfoString from '../../../common/InfoString/InfoString';
import classes from './Crypt.module.css'

const Crypt = ({ heroes }) => {
  const heroesList = heroes.length > 0 ? heroes.map((hero, i) => {
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
          <InfoString icon='ico_record' text={`${hero.stats.win}-${hero.stats.lose}`} />
          <InfoString icon='ico_killed' text={hero.stats.killed} />
        </div>
      </div>
    )
  }) : ['Still nobody dead']
  
  return <div className={classes.container}>
    {heroesList}
  </div>
}

export default Crypt;