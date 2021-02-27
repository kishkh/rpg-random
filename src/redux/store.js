import {createStore, combineReducers} from 'redux';
import enemiesReducer from './reducers/enemy-reducer';
import profileReducer from './reducers/profile-reducer';
import villageReducer from './reducers/village-reducer';
import battleReducer from './reducers/battle-reducer';

const reducers = combineReducers(
  {
    profile: profileReducer,
    battle: battleReducer,
    village: villageReducer,
    enemies: enemiesReducer,
  }
)

const store = createStore(reducers);

window.store = store
 
export default store;