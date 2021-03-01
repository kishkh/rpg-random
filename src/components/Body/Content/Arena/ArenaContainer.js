import {connect} from 'react-redux';
import Arena from './Arena';


const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
const ArenaContainer = connect(mapStateToProps, mapDispatchToProps)(Arena) 
export default ArenaContainer;