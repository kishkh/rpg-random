import { connect } from 'react-redux';
import Crypt from './Crypt';

const mapStateToProps = (state) => {
  return {
    heroes: state.crypt.heroes
  }
}

const CryptContainer = connect(mapStateToProps)(Crypt)
export default CryptContainer;