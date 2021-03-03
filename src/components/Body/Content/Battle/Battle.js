import React from 'react';
import EnemyHero from './EnemyHero/EnemyHero';
import Hero from './Hero/Hero';
import classes from './Battle.module.css'
import BattleField from './BattleField/BattleField';
import ModalWindow from '../../../common/ModalWindow/ModalWindow';
import ModalButton from '../../../common/ModalWindow/ModalButton/ModalButton';
import ModalTitle from '../../../common/ModalWindow/ModalTitle/ModalTitle';
import { NavLink } from 'react-router-dom';

class Battle extends React.Component {
  componentDidMount() {
    const enemyId = +this.props.match.params.enemyId
    const enemyBattle = this.props.enemies.find(element => {
      return element.id === enemyId
    });
    this.props.start(this.props.profile, enemyBattle)
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>

          <ModalWindow active={this.props.battle.modalLeave}>
            <ModalTitle text='Do yo really want to leave this fight?' />
            <div className={classes.btn_container}>
              <NavLink to='/profile'>
                <ModalButton ico='button_leave' event={this.props.leave} />
              </NavLink>
              <ModalButton ico='button_cross' event={this.props.isLeave} />
            </div>
          </ModalWindow>
          <ModalWindow active={this.props.battle.modalWin}>
            <ModalTitle text='Enemy lose and want to pay you for his life. Do you Agree? Or try to kill him and get all!' />
            <div className={classes.btn_container}>
              <NavLink to='/profile'>
                <ModalButton ico='button_win' event={this.props.win} />
              </NavLink>
              <ModalButton ico='button_cross' event={this.props.isWin} />
            </div>
          </ModalWindow>
          <ModalWindow active={this.props.battle.enemy.death}>
            <ModalTitle text={`You kill ${this.props.battle.enemy.name} get him money and can take one of him item`}  />
            <div className={classes.btn_container}>
              <NavLink to='/profile'>
                <ModalButton ico='button_kill' event={this.props.kill} />
              </NavLink>
            </div>
          </ModalWindow>
          <ModalWindow active={this.props.battle.player.death}>
            <ModalTitle text={`You die! Your family will remember and avenge you! You can check your result in Crypt`}  />
            <div className={classes.btn_container}>
              <NavLink to='/profile'>
                <ModalButton ico='button_die' event={this.props.dead} />
              </NavLink>
            </div>
          </ModalWindow>

          <div className={classes.boxL}>
            <Hero
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
        <div className={classes.wrapper}>
          <div>fightHistory</div>
          {this.props.battle.fightHistory.map((history, i) => <span key={i}>{history}</span>)}
        </div>
      </div>)
  }

}

export default Battle;