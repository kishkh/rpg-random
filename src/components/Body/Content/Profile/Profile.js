import React from 'react';

import '../../../../assets/classes/profileIco.css'
import CharacterUser from '../../../common/CharacterBody/CharacterUser';
import InfoString from '../../../common/InfoString/InfoString';
import FormInventory from '../../../common/Form/FormInventory';
import classes from './Profile.module.css';

const Profile = ({ profile, ...props }) => {
  let enemies = profile.stats.killed.length > 0 ?
    profile.stats.killed.map((enemy, i) => {
      return (
        <div key={`${i} head`} className={classes.icoContainer} >
          <div className={`${enemy} ${classes.ico}`} />
        </div>
      )
    }) : []
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          <CharacterUser player={profile} />
          <div className={classes.bigBtnContainer}>
            <button 
              onClick={props.toggleInventory} 
              className={profile.inventoryToggle ? classes.activeBtn : classes.bigBtn}>
              Inventory
          </button>
          </div>
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
                <button disabled={profile.damage.min >= profile.damage.max} onClick={props.skillUpMinDamage}>+1min</button>
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
          <div className={classes.row}>
            <InfoString icon='ico_killed' text={enemies.length === 0 ? 0 : false} />
            <div className={classes.killContainer}>
              {enemies.length > 0 ? enemies : false}
            </div>
          </div>

        </div>
        <div className={profile.inventoryToggle ? classes.inventory : classes.hide}>
          <FormInventory
            changeItems={props.changeItems}
            toggleInventory={props.toggleInventory}
            profile={profile}
            bigBtn={classes.bigBtn}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile;