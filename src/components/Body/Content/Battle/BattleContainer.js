import { connect } from 'react-redux';
import Battle from './Battle';
import { attackCreator, battleAttackCreator, addBattleDataCreator, addHistoryCreator, defenceCreator, battleDefenceCreator, leaveCreator, winCreator, executionAttackCreator, killCreator, executionDefenceCreator, } from '../../../../redux/reducers/battle-reducer';



const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies,
    profile: state.profile,
    battle: state.battle,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBattleData: (player, enemy) => {
      dispatch(addBattleDataCreator(player, enemy))
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
    leave: (data, hp) => {
      dispatch(leaveCreator(data, hp))
    },
    win: (data, hp) => {
      dispatch(winCreator(data, hp))
    },
    kill: (data, hp) => {
      dispatch(killCreator(data, hp))
    },
  }
}
const BattleContainer = connect(mapStateToProps, mapDispatchToProps)(Battle)
export default BattleContainer;