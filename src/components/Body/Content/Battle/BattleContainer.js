import { connect } from 'react-redux';
import { attackCreator, battleAttackCreator, addBattleDataCreator, defenceCreator, battleDefenceCreator, leaveCreator, winCreator, executionAttackCreator, killCreator, executionDefenceCreator, isLeaveCreator, isWinCreator, startCreator, deadCreator, removeLocalCreator, saveLocalCreator, } from '../../../../redux/reducers/battle-reducer';
import { isHealingTrueCreator, takeItemCreator } from '../../../../redux/reducers/profile-reducer';
import { compose } from 'redux';
import { finishFightEnemyCreator } from '../../../../redux/reducers/enemy-reducer';
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
      return new Promise((resolve, reject) => {
        dispatch(addBattleDataCreator(player, enemy))
          resolve()
      }).then(() => {
        dispatch(startCreator()) 
      })
      
      
    },
    attack: (attack) => {
      return new Promise((resolve, reject) => {
        dispatch(attackCreator(attack))
        dispatch(battleAttackCreator())
          resolve()
      }).then(() => {
        dispatch(saveLocalCreator()) 
      })
    },
    defence: (defence) => {
      return new Promise((resolve, reject) => {
        dispatch(defenceCreator(defence))
        dispatch(battleDefenceCreator())
          resolve()
      }).then(() => {
        dispatch(saveLocalCreator()) 
      })
    },
    executionAttack: (attack) => {
      return new Promise((resolve, reject) => {
        dispatch(attackCreator(attack))
        dispatch(executionAttackCreator())
          resolve()
      }).then(() => {
        dispatch(saveLocalCreator()) 
      })
    },
    executionDefence: (defence) => {
      return new Promise((resolve, reject) => {
        dispatch(defenceCreator(defence))
        dispatch(executionDefenceCreator())
          resolve()
      }).then(() => {
        dispatch(saveLocalCreator()) 
      })
    },
    leave: () => {
      return new Promise((resolve, reject) => {
        dispatch(leaveCreator())
          resolve()
      }).then(() => {
        dispatch(finishFightEnemyCreator()) 
      })
    },
    win: () => {
      return new Promise((resolve, reject) => {
        dispatch(winCreator())
          resolve()
      }).then(() => {
        dispatch(finishFightEnemyCreator())
      })
    },
    kill: () => {
      return new Promise((resolve, reject) => {
        dispatch(killCreator())
          resolve()
      }).then(() => {
        dispatch(finishFightEnemyCreator())
      })
    },
    dead: () => {
      return new Promise((resolve, reject) => {
        dispatch(deadCreator())
          resolve()
      }).then(() => {
        dispatch(finishFightEnemyCreator())
      })      
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