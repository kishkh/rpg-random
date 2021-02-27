import {connect} from 'react-redux';
import Dungeon from './Dungeon';


const mapStateToProps = (state) => {
  return {
    enemies: state.enemies.enemies
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
const DungeonContainer = connect(mapStateToProps, mapDispatchToProps)(Dungeon) 
export default DungeonContainer;