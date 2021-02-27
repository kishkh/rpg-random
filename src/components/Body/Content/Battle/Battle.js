import React from 'react';
import EnemyHero from './EnemyHero/EnemyHero';
import Hero from './Hero/Hero';
import classes from './Battle.module.css'
import BattleField from './BattleField/BattleField';

class Battle extends React.Component {

  componentDidMount() {
    this.props.addBattleData(this.props.profile, this.props.enemies[2])
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.boxL}>
            <Hero
              player={this.props.battle.player}
            />
          </div>
          <div className={classes.boxC}>
            <BattleField
              battle={this.props.battle}
              leave={this.props.leave}
              win={this.props.win}
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
            <EnemyHero enemy={this.props.battle.enemy} />
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