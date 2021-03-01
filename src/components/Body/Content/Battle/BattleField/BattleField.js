import React from 'react';
import { NavLink } from 'react-router-dom';
import attackImg from '../../../../../assets/images/atack-defence/crossed-axes.svg'
import dieImg from '../../../../../assets/images/atack-defence/tombstone.svg';
import killImg from '../../../../../assets/images/atack-defence/battered-axe.svg'
import defenceImg from '../../../../../assets/images/checked-shield.svg';
import AttackButton from './ActionButton/AttackButton';
import DefenceButton from './ActionButton/DefenceButton';

import classes from './BattleField.module.css'
import ModalWindow from '../../../../common/ModalWindow/ModalWindow';

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
      <div className={classes.text}>
      <span>x </span>
      <span className={classes.combo} style={{color: 'green', fontSize: 20+props.battle.player.series}}>{props.battle.player.series}</span>
      <span > Round: {props.battle.round} </span>

      <span>x </span>
      <span className={classes.combo} style={{color: 'red', fontSize: 20+props.battle.enemy.series}}>{props.battle.enemy.series}</span>
      </div>
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
        props.battle.attackMode &&
        !props.battle.enemy.berserk &&
        <button onClick={props.isLeave}>Leave</button> 
      }
      {
        props.battle.enemy.hp.current <= 1 &&
          <button onClick={props.isWin}>Win</button>    
      }
    </div>

  )

}

export default BattleField;