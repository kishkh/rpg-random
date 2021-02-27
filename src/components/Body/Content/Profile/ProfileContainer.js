import {connect} from 'react-redux';
import { lvlUpCreator, skillUpCreator, updateDataCreator } from '../../../../redux/reducers/profile-reducer';
import {emptyResultCreator} from '../../../../redux/reducers/battle-reducer'
import ProfileClassContainer from './ProfileClassContainer';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    result: state.battle.resultFight,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    lvlUp: () => {
      dispatch(lvlUpCreator())
    },
    skillUp: (attack, defence) => {
      dispatch(skillUpCreator(attack, defence))
    },
    updateData: (data) => {
      dispatch(updateDataCreator(data))
    },
    emptyResult: () => {
      dispatch(emptyResultCreator())
    }
  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileClassContainer)
export default ProfileContainer;