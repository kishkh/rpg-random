import React from 'react';
import { Route } from 'react-router-dom';
import Pvp from './Pvp/Pvp';
import Village from './Village/Village';
import classes from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import BattleContainer from './Battle/BattleContainer';
import ArenaContainer from './Arena/ArenaContainer';
import CryptContainer from './Crypt/CryptContainer';

const Content = () => {
  return <div className={classes.container}>
    <Route
        path='/profile' render={() => <ProfileContainer />}
    />
    <Route
        path='/battle/:enemyId?' render={() => <BattleContainer />}
    />
    <Route
        path='/crypt' render={() => <CryptContainer />}
    />
    <Route
        path='/arena' render={() => <ArenaContainer />}
    />
    <Route
        path='/pvp' render={() => <Pvp />}
    />
    <Route
        path='/village' render={() => <Village />}
    /> 
  </div>
}

export default Content;