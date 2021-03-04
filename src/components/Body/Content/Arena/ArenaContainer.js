import {connect} from 'react-redux';
import { compose } from 'redux';
import withRedirect from '../../../../hoc/withRedirect';
import Arena from './Arena';


const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies,
    profile: state.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect
)(Arena)
