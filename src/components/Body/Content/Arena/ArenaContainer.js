import {connect} from 'react-redux';
import { compose } from 'redux';

import withRedirect from '../../../../hoc/withRedirect';
import withRedirectBattle from '../../../../hoc/withRedirectBattle';
import { startCreator } from '../../../../redux/reducers/battle-reducer';
import { startFightEnemyCreator } from '../../../../redux/reducers/enemy-reducer';
import Arena from './Arena';

const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies,
    isFight: state.battle.isFight,
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    startFightEnemy: (id) => {
      dispatch(startFightEnemyCreator(id))
      dispatch(startCreator())
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirectBattle,
  withRedirect
)(Arena)
