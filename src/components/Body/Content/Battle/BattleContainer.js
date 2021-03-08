import { connect } from 'react-redux';
import Battle from './Battle';
import { attackCreator, battleAttackCreator, addBattleDataCreator, defenceCreator, battleDefenceCreator, leaveCreator, winCreator, executionAttackCreator, killCreator, executionDefenceCreator, isLeaveCreator, isWinCreator, startCreator, deadCreator, } from '../../../../redux/reducers/battle-reducer';
import { withRouter } from 'react-router-dom';
import { isHealingTrueCreator, takeItemCreator } from '../../../../redux/reducers/profile-reducer';
import { compose } from 'redux';
import withRedirect from '../../../../hoc/withRedirect';



const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies,
    profile: state.profile,
    battle: state.battle,
    condition: !state.battle.isFight
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    start: (player, enemy) => {
      dispatch(addBattleDataCreator(player, enemy))
      dispatch(startCreator())
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
    takeItem: (type, item) => {
      dispatch(takeItemCreator(type, item))
    }
  }
}



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withRedirect
)(Battle)