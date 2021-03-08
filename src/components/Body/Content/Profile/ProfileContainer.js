import { connect } from 'react-redux';
import { compose } from 'redux'

import { addKillEnemyCreator, changeItemsCreator, isDeadCreator, lvlUpCreator, skillUpHPCreator, skillUpMaxDamageCreator, skillUpMinDamageCreator, toggleInventoryCreator, updateDataCreator } from '../../../../redux/reducers/profile-reducer';
import { emptyResultCreator } from '../../../../redux/reducers/battle-reducer'
import { isEnemyDeadCreator, restartCreator, updateEnemyDataCreator } from '../../../../redux/reducers/enemy-reducer';
import { updateCryptDataCreator } from '../../../../redux/reducers/crypt-reducer';
import withRedirect from '../../../../hoc/withRedirect';
import ProfileClassContainer from './ProfileClassContainer';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    result: state.battle.resultFight,
    enemy: state.battle.enemy,
    player: state.battle.player,
    enemies: state.enemies.enemies
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    lvlUp: (timers) => {
      dispatch(lvlUpCreator())
    },
    skillUpHP: () => {
      dispatch(skillUpHPCreator())
    },
    skillUpMinDamage: () => {
      dispatch(skillUpMinDamageCreator())
    },
    skillUpMaxDamage: () => {
      dispatch(skillUpMaxDamageCreator())
    },
    isEnemyDead: (id, death, head) => {
      dispatch(isEnemyDeadCreator(id, death))
      dispatch(addKillEnemyCreator(head))
    },
    isDead: (data) => {
      dispatch(updateCryptDataCreator(data))
      dispatch(isDeadCreator())
      dispatch(restartCreator())
    },
    updateData: (data, id) => {
      dispatch(updateDataCreator(data))
      dispatch(updateEnemyDataCreator(data, id))
    },
    emptyResult: () => {
      dispatch(emptyResultCreator())
    },
    changeItems: (items) => {
      dispatch(changeItemsCreator(items))
    },
    toggleInventory: () => {
      dispatch(toggleInventoryCreator())
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect
)(ProfileClassContainer)