import { connect } from 'react-redux';

import { healUpThunkCreator } from '../../../../redux/reducers/profile-reducer';
import ProfileLink from './ProfileLink';

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    isFight: state.battle.isFight,
    battleHP: state.battle.player.hp
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    healUp: (hpMin, hpMax) => {
      dispatch(healUpThunkCreator(hpMin, hpMax))
    }
  }
}

const ProfileLinkContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileLink)
export default ProfileLinkContainer;