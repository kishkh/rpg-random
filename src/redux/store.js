import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import enemiesReducer from './reducers/enemy-reducer';
import profileReducer from './reducers/profile-reducer';
import villageReducer from './reducers/village-reducer';
import battleReducer from './reducers/battle-reducer';
import cryptReducer from './reducers/crypt-reducer';

const reducers = combineReducers(
  {
    profile: profileReducer,
    battle: battleReducer,
    village: villageReducer,
    enemies: enemiesReducer,
    crypt: cryptReducer,
  }
)

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store
 
export default store;