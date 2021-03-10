import { connect } from 'react-redux';

import { healCreator, isHealingClassCreator, isHealingFalseCreator, isHealingTrueCreator } from '../../../../redux/reducers/profile-reducer';
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
    healPromise: (hpMin, hpMax) => {
      dispatch(isHealingFalseCreator())
      return new Promise((resolve, reject) => {
        if( hpMin < hpMax ) {
          resolve()
        } else {
          reject()
        }
      })
    },
    isHealing: (result) => {
      dispatch(isHealingClassCreator(result))
    },
    heal: () => {
      dispatch(healCreator())
    },
    isHealingTrue: () => {
      dispatch(isHealingTrueCreator())
    },
    isHealingFalse: () => {
      dispatch(isHealingFalseCreator())
    },
  }
}

const ProfileLinkContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileLink)
export default ProfileLinkContainer;