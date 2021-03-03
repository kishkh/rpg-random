import { connect } from 'react-redux';
import Battle from './Battle';
import { attackCreator, battleAttackCreator, addBattleDataCreator, addHistoryCreator, defenceCreator, battleDefenceCreator, leaveCreator, winCreator, executionAttackCreator, killCreator, executionDefenceCreator, isLeaveCreator, isWinCreator, startCreator, deadCreator, } from '../../../../redux/reducers/battle-reducer';
import { withRouter } from 'react-router-dom';
import { isHealingTrueCreator } from '../../../../redux/reducers/profile-reducer';



const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies,
    profile: state.profile,
    battle: state.battle,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    start: (player, enemy) => {
      dispatch(addBattleDataCreator(player, enemy))
      dispatch(startCreator())
    },
    addHistory: () => {
      dispatch(addHistoryCreator())
    },
    attack: (attack) => {
      dispatch(attackCreator(attack))
      dispatch(battleAttackCreator())
    },
    defence: (defence, hp) => {
      dispatch(defenceCreator(defence))
      dispatch(battleDefenceCreator())
    },
    executionAttack: (attack) => {
      dispatch(attackCreator(attack))
      dispatch(executionAttackCreator())
    },
    executionDefence: (defence) => {
      dispatch(defenceCreator(defence))
      dispatch(executionDefenceCreator())
    },
    leave: () => {
      dispatch(leaveCreator())
      dispatch(isHealingTrueCreator())
    },
    win: () => {
      dispatch(winCreator())
      dispatch(isHealingTrueCreator())
    },
    kill: () => {
      dispatch(killCreator())
      dispatch(isHealingTrueCreator())
    },
    dead: () => {
      localStorage.removeItem('enemies')
      dispatch(deadCreator())
    },
    isLeave: () => {
      dispatch(isLeaveCreator())
    },
    isWin: () => {
      dispatch(isWinCreator())
    },
  }
}
const WithURLDataContainerBattle = withRouter(Battle)
const BattleContainer = connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainerBattle)


export default BattleContainer;