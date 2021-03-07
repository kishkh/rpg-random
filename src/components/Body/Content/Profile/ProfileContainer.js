import {connect} from 'react-redux';
import { changeItemsCreator, isDeadCreator, lvlUpCreator, skillUpHPCreator, skillUpMaxDamageCreator, skillUpMinDamageCreator, updateDataCreator } from '../../../../redux/reducers/profile-reducer';
import {emptyResultCreator} from '../../../../redux/reducers/battle-reducer'
import ProfileClassContainer from './ProfileClassContainer';
import { isEnemyDeadCreator, restartCreator } from '../../../../redux/reducers/enemy-reducer';
import { updateCryptDataCreator } from '../../../../redux/reducers/crypt-reducer';
import { compose } from 'redux';
import withRedirect from '../../../../hoc/withRedirect';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    result: state.battle.resultFight,
    enemy: state.battle.enemy,
    player: state.battle.player
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
    isEnemyDead: (id, death) => {
      dispatch(isEnemyDeadCreator(id, death))
    },
    isDead: (data) => {
      dispatch(updateCryptDataCreator(data))
      dispatch(isDeadCreator())
      dispatch(restartCreator()) 
    },
    updateData: (data) => {
      dispatch(updateDataCreator(data))
    },
    emptyResult: () => {
      dispatch(emptyResultCreator())
    },
    changeItems: (items) => {
      dispatch(changeItemsCreator(items))
    },
    
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect
)(ProfileClassContainer)