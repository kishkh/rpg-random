import { compose } from 'redux';
import { connect } from 'react-redux';

import withRedirectBattle from '../../../../hoc/withRedirectBattle';
import withRedirect from '../../../../hoc/withRedirect';
import Village from './Village';

const mapStateToProps = (state) => {
  return {
    isFight: state.battle.isFight,
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect,
  withRedirectBattle
)(Village)
