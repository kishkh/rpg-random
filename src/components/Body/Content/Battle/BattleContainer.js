import { connect } from 'react-redux';
import { compose } from 'redux';

import { leaveCreator, winCreator, killCreator, isLeaveCreator, isWinCreator, deadCreator, startThunkCreator, attackThunkCreator, defenceThunkCreator, executionDefenceThunkCreator, executionAttackThunkCreator, finishFightThunkCreator } from '../../../../redux/reducers/battle-reducer';
import { takeItemCreator } from '../../../../redux/reducers/profile-reducer';
import { withRedirectToProfile } from '../../../../hoc/withRedirectToProfile';
import Battle from './Battle';

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
      dispatch(startThunkCreator(player, enemy))
    },
    attack: (attack) => {
      dispatch(attackThunkCreator(attack))
    },
    defence: (defence) => {
      dispatch(defenceThunkCreator(defence))
    },
    executionAttack: (attack) => {
      dispatch(executionAttackThunkCreator(attack))
    },
    executionDefence: (defence) => {
      dispatch(executionDefenceThunkCreator(defence))
    },
    leave: () => {
      dispatch(finishFightThunkCreator(leaveCreator))
    },
    win: () => {
      dispatch(finishFightThunkCreator(winCreator))
    },
    kill: () => {
      dispatch(finishFightThunkCreator(killCreator))
    },
    dead: () => {
      dispatch(finishFightThunkCreator(deadCreator))
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
  withRedirectToProfile
)(Battle)