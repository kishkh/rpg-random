import { connect } from 'react-redux';
import { sortByDateCreator, sortByExpCreator, SortByKillsCreator } from '../../../../redux/reducers/crypt-reducer';
import Crypt from './Crypt';

const mapStateToProps = (state) => {
  return {
    heroes: state.crypt.heroes,
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

const CryptContainer = connect(mapStateToProps, mapDispatchToProps)(Crypt)
export default CryptContainer;