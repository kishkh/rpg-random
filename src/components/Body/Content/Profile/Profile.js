import React from 'react';
import '../../../../assets/classes/profileIco.css'
import classes from './Profile.module.css'
import CharacterUser from '../../../common/CharacterBody/CharacterUser';
import InfoString from '../../../common/InfoString/InfoString';
import { Redirect } from 'react-router-dom';
import FormInventory from '../../../common/Form/FormInventory';
const Profile = ({ profile, ...props }) => {

  if (!profile.created) {
    return <Redirect to={'/create'} />
  }
  return <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <CharacterUser player={profile} />
        <div className={classes.killContainer}>ssss</div>
      </div>
      <div className={classes.box}>
        <InfoString icon='ico_name' text={profile.name} />
        <InfoString icon='ico_lvl' text={profile.lvl} />
        <InfoString
          icon='ico_exp'
          text={`${profile.exp.current}/${profile.exp.nextLvl}`}
        />
        <InfoString icon='ico_skill' text={profile.skill} />
        <div className={classes.row}>
          <InfoString
            icon='ico_damage'
            text={`${profile.damage.min}-${profile.damage.max}`}
          />
          {
            profile.skill > 0 &&
            <div className={classes.btn_container}>
              <button onClick={props.skillUpMinDamage}>+1min</button>
              <button onClick={props.skillUpMaxDamage}>+1max</button>
            </div>
          }
        </div>
        <div className={classes.row}>
          <InfoString
            icon='ico_hp'
            text={`${profile.hp.current}/${profile.hp.full}`}
          />
          {
            profile.skill > 0 &&
            <button onClick={props.skillUpHP}>+5hp</button>
          }
        </div>
        <InfoString icon='ico_coin' text={profile.stats.coins} />
        <InfoString
          icon='ico_record'
          text={`${profile.stats.win}/${profile.stats.lose}`}
        />
        <InfoString icon='ico_killed' text={profile.stats.killed} />
      </div>
      <div className={classes.inventory}>
        <FormInventory changeItems={props.changeItems} profile={profile} />
      </div>
    </div>

  </div>
}

export default Profile;