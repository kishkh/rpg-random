import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import BattleContainer from './Battle/BattleContainer';
import ArenaContainer from './Arena/ArenaContainer';
import CryptContainer from './Crypt/CryptContainer';
import CreatePlayerContainer from './CreatePlayer/CreatePlayerContainer';
import PvpContainer from './Pvp/PvpContainer';
import VillageContainer from './Village/VillageContainer';

const Content = () => {
  return <div className={classes.container}>
    <Route
        path='/profile' render={() => <ProfileContainer />}
    />
    <Route
        path='/battle' render={() => <BattleContainer />}
    />
    <Route
        path='/crypt' render={() => <CryptContainer />}
    />
    <Route
        path='/arena' render={() => <ArenaContainer />}
    />
    <Route
        path='/pvp' render={() => <PvpContainer />}
    />
    <Route
        path='/village' render={() => <VillageContainer />}
    />
    <Route
        path='/create' render={() => <CreatePlayerContainer />}
    /> 
  </div>
}

export default Content;