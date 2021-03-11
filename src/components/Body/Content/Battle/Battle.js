import React from 'react';
import { Redirect } from 'react-router-dom';

import ModalWindow from '../../../common/ModalWindow/ModalWindow';
import ModalWindowKill from '../../../common/ModalWindow/ModalWindowKill';
import ModalButton from '../../../common/ModalWindow/ModalButton/ModalButton';
import ModalTitle from '../../../common/ModalWindow/ModalTitle/ModalTitle';
import EnemyHero from './EnemyHero/EnemyHero';
import Hero from './Hero/Hero';
import classes from './Battle.module.css'
import BattleField from './BattleField/BattleField';


class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hpClass: '', hpCurrent: 0};
  }
  componentDidMount() {

    const enemyBattle = this.props.enemies.find(enemy => {
      return enemy.isFight === true
    });
    const storageData = JSON.parse(localStorage.getItem('battle'))
    if (this.props.battle.isFight && storageData) {

      this.props.start(storageData.player, storageData.enemy)
    } else if (this.props.battle.isFight && !storageData) {

      this.props.start(this.props.profile, enemyBattle)
    }
    if (!this.props.profile.created) {
      return <Redirect to={'/create'} />
    }
  }
  componentDidUpdate() { 
    
    let hp = (hp) => {
      if(hp < this.props.battle.player.hp.full / 2 && hp > 1) {
        return  `${classes.container} ${classes.half}`
      } else if (hp === 1) {
        return `${classes.container} ${classes.berserk}`
      } else return  `${classes.container}`
    }
    this.props.battle.player.hp.current !== this.state.hpCurrent &&
    this.setState({
      hpClass: hp(this.props.battle.player.hp.current),
      hpCurrent: this.props.battle.player.hp.current
    })

  }

  render() {
   
    return (
      <div className={classes.wrapper}>
        <div className={this.state.hpClass}>
          <ModalWindow active={this.props.battle.modalLeave}>
            <ModalTitle text={`Do yo really want to leave this fight? ${this.props.battle.enemy.name} will celebrate his victory and spend ${this.props.battle.enemy.result.coinLeave} coins`} />
            <div className={classes.btn_container}>
              <ModalButton ico='button_leave' event={this.props.leave} />
              <ModalButton ico='button_cross' event={this.props.isLeave} />
            </div>
          </ModalWindow>
          <ModalWindow active={this.props.battle.modalWin}>
            <ModalTitle text= {`The enemy has lost and wants to pay ${this.props.battle.enemy.result.coinWin} coins you for his life. Do you agree? Or try to kill him and take all the treasures!`} />
            <div className={classes.btn_container}>
              <ModalButton ico='button_win' event={this.props.win} />
              <ModalButton ico='button_cross' event={this.props.isWin} />
            </div>
          </ModalWindow>
          <ModalWindowKill
            active={this.props.battle.enemy.death}
            text={`You killed ${this.props.battle.enemy.name} got ${this.props.battle.enemy.result.coinKill} coins and artifact of your choice`}
            enemy={this.props.battle.enemy}
            takeItem={this.props.takeItem}
            ico='button_kill'
            kill={this.props.kill}
          />
          <ModalWindow active={this.props.battle.player.death}>
            <ModalTitle text={`Your hero is dead! His family will remember and avenge him! Check the result in the crypt`} />
            <div className={classes.btn_container}>
              <ModalButton ico='button_die' event={this.props.dead} />

            </div>
          </ModalWindow>
          <div className={classes.boxL}>
            <Hero
              profile={this.props.profile}
              player={this.props.battle.player}
              enemyDamage={this.props.battle.enemy.resultDamage}
            />
          </div>
          <div className={classes.boxC}>
            <BattleField
              battle={this.props.battle}
              isLeave={this.props.isLeave}
              isWin={this.props.isWin}
              kill={this.props.kill}
              enemy={this.props.enemies[2]}
              addHistory={this.props.addHistory}
              attack={this.props.attack}
              defence={this.props.defence}
              executionAttack={this.props.executionAttack}
              executionDefence={this.props.executionDefence}
            />
          </div>
          <div className={classes.boxR}>
            <EnemyHero
              enemy={this.props.battle.enemy}
              playerDamage={this.props.battle.player.resultDamage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Battle;