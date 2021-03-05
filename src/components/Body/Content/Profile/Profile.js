import React from 'react';
import '../../../../assets/classes/profileIco.css'
import classes from './Profile.module.css'
import CharacterUser from '../../../common/CharacterBody/CharacterUser';
import InfoString from '../../../common/InfoString/InfoString';
import { Redirect } from 'react-router-dom';
const Profile = ({ profile, ...props}) => {
  
  if (!profile.created) {
    return <Redirect to={'/create'}/>
  }
  return <div className={classes.container}>
    <div className={classes.boxBody}>
      <CharacterUser player={profile} />
      <div className={classes.selector}></div>
    </div>
    <div className={classes.box}>
      <InfoString icon='ico_name' text={profile.name} />
      <InfoString icon='ico_lvl' text={profile.lvl} />
      <InfoString icon='ico_exp' text={`${profile.exp.current}/${profile.exp.nextLvl}`} />
      
      
      
      <div className={classes.row}>
      <InfoString icon='ico_damage' text={`${profile.damage.min}-${profile.damage.max}`} />
        {
          profile.skill > 0 &&
          <>
          <button onClick={props.skillUpMinDamage}>+1</button>
          <button onClick={props.skillUpMaxDamage}>+1</button>
          </>
          
        }
      </div>
      <div className={classes.row}>
        <InfoString icon='ico_hp' text={`${profile.hp.current}/${profile.hp.full}`} />
        {
          profile.skill > 0 &&
          <button onClick={props.skillUpHP}>+5</button>
        }
      </div>
      <InfoString icon='ico_coin' text={profile.stats.coins} />
      <InfoString icon='ico_record' text={`${profile.stats.win}/${profile.stats.lose}`} />
      <InfoString icon='ico_killed' text={profile.stats.killed} />
      <InfoString icon='ico_skill' text={profile.skill} />
    </div>
  </div>
}

export default Profile;