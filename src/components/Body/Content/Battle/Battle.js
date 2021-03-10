import React from 'react';
import EnemyHero from './EnemyHero/EnemyHero';
import Hero from './Hero/Hero';
import classes from './Battle.module.css'
import BattleField from './BattleField/BattleField';
import ModalWindow from '../../../common/ModalWindow/ModalWindow';
import ModalWindowKill from '../../../common/ModalWindow/ModalWindowKill';
import ModalButton from '../../../common/ModalWindow/ModalButton/ModalButton';
import ModalTitle from '../../../common/ModalWindow/ModalTitle/ModalTitle';
import { Redirect } from 'react-router-dom';

class Battle extends React.Component {
  componentDidMount() {
    debugger
    const enemyBattle = this.props.enemies.find(enemy => {
      return enemy.isFight === true
    });
    const storageData = JSON.parse(localStorage.getItem('battle'))
    if (this.props.battle.isFight && storageData) {
      debugger
      this.props.start(storageData.player, storageData.enemy)
    } else if (this.props.battle.isFight && !storageData) {
      debugger
      this.props.start(this.props.profile, enemyBattle)
    }    
    if (!this.props.profile.created) {
      return <Redirect to={'/create'}/>
    }
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>

          <ModalWindow active={this.props.battle.modalLeave}>
            <ModalTitle text='Do yo really want to leave this fight?' />
            <div className={classes.btn_container}>
              
                <ModalButton ico='button_leave' event={this.props.leave} />
              
              <ModalButton ico='button_cross' event={this.props.isLeave} />
            </div>
          </ModalWindow>
          <ModalWindow active={this.props.battle.modalWin}>
            <ModalTitle text='Enemy lose and want to pay you for his life. Do you Agree? Or try to kill him and get all!' />
            <div className={classes.btn_container}>
              
                <ModalButton ico='button_win' event={this.props.win} />
              
              <ModalButton ico='button_cross' event={this.props.isWin} />
            </div>
          </ModalWindow>
          <ModalWindowKill
            active={this.props.battle.enemy.death}
            text={`You killed ${this.props.battle.enemy.name} get money and one of him item`}
            enemy={this.props.battle.enemy}
            takeItem={this.props.takeItem}
            ico='button_kill' 
            kill={this.props.kill} 
          />
            
          
          <ModalWindow active={this.props.battle.player.death}>
            <ModalTitle text={`You die! Your family will remember and avenge you! You can check your result in Crypt`}  />
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
      </div>)
  }

}

export default Battle;