import { compose } from 'redux';
import { connect } from 'react-redux';

import { sortByDateCreator, sortByExpCreator, SortByKillsCreator } from '../../../../redux/reducers/crypt-reducer';
import withRedirectBattle from '../../../../hoc/withRedirectBattle';
import withRedirect from '../../../../hoc/withRedirect';
import Crypt from './Crypt';

const mapStateToProps = (state) => {
  return {
    heroes: state.crypt.heroes,
    isFight: state.battle.isFight,
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sortByExp: () => {
      dispatch(sortByExpCreator())
    },
    sortByKills: () => {
      dispatch(SortByKillsCreator())
    },
    sortByDate: () => {
      dispatch(sortByDateCreator())
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect,
  withRedirectBattle
)(Crypt)