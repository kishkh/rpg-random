import React from 'react';
import { NavLink } from 'react-router-dom';
import attackImg from '../../../../../assets/images/atack-defence/crossed-axes.svg'
import dieImg from '../../../../../assets/images/atack-defence/tombstone.svg';
import killImg from '../../../../../assets/images/atack-defence/battered-axe.svg'
import defenceImg from '../../../../../assets/images/checked-shield.svg';
import AttackButton from './ActionButton/AttackButton';
import DefenceButton from './ActionButton/DefenceButton';

import classes from './BattleField.module.css'

const BattleField = (props) => {
  const attack = (action) => {
    props.attack(action)
    props.addHistory()
  }
  const defence = (action, hp) => {
    props.defence(action, hp)
    props.addHistory()
  }
  const executionAttack = (action) => {
    props.executionAttack(action)
    props.addHistory()
  }
  const executionDefence = (action) => {
    props.executionDefence(action)
    props.addHistory()
  }

  return (
    <div className={classes.container}>
      <span className={classes.text}> Round: {props.battle.round}</span>
      <div className={classes.wrapper}>
        <div className={classes.box}>
          {
            props.battle.player.berserk ?
              <DefenceButton
                action={executionDefence} classes={classes} img={dieImg}
                attackMode={props.battle.attackMode} case={1}
              /> :
              <DefenceButton
                action={defence} classes={classes} img={defenceImg}
                attackMode={props.battle.attackMode} case={1}
                hp={props.battle.player.hp.current}
              />
          }
          {
            props.battle.enemy.berserk ?
              <AttackButton
                action={executionAttack} classes={classes} img={killImg}
                attackMode={props.battle.attackMode} case={1}
              /> :
              <AttackButton
                action={attack} classes={classes} img={attackImg}
                attackMode={props.battle.attackMode} case={1}
              />
          }
        </div>
        <div className={classes.box}>
          {
            props.battle.player.berserk ?
              <DefenceButton
                action={executionDefence} classes={classes} img={dieImg}
                attackMode={props.battle.attackMode} case={2}
              /> :
              <DefenceButton
                action={defence} classes={classes} img={defenceImg}
                attackMode={props.battle.attackMode} case={2}
                hp={props.battle.player.hp.current}
              />
          }
          {
            props.battle.enemy.berserk ?
              <AttackButton
                action={executionAttack} classes={classes} img={killImg}
                attackMode={props.battle.attackMode} case={2}
              /> :
              <AttackButton
                action={attack} classes={classes} img={attackImg}
                attackMode={props.battle.attackMode} case={2}
              />
          }
        </div>
        <div className={classes.box}>
          {
            props.battle.player.berserk ?
              <DefenceButton
                action={executionDefence} classes={classes} img={dieImg}
                attackMode={props.battle.attackMode} case={3}
              /> :
              <DefenceButton
                action={defence} classes={classes} img={defenceImg}
                attackMode={props.battle.attackMode} case={3}
                hp={props.battle.player.hp.current}
              />
          }
          {
            props.battle.enemy.berserk ?
              <AttackButton
                action={executionAttack} classes={classes} img={killImg}
                attackMode={props.battle.attackMode} case={3}
              /> :
              <AttackButton
                action={attack} classes={classes} img={attackImg}
                attackMode={props.battle.attackMode} case={3}
              />
          }
        </div>
      </div>
      {
        props.battle.round >= 5 &&
        props.battle.attackMode &&
        !props.battle.enemy.berserk &&
        <NavLink to='/profile'>
          <button onClick={props.leave}>Leave</button>
        </NavLink>
      }
      {
        props.battle.enemy.hp.current <= 0 &&
        <NavLink to='/profile'>
          <button onClick={props.win}>Win</button>
        </NavLink>
      }
      {
        props.battle.enemy.death &&
        <NavLink to='/profile'>
          <button onClick={props.kill}>Kill</button>
        </NavLink>
      }
    </div>

  )

}

export default BattleField;