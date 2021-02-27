import React from 'react';
import { Route } from 'react-router-dom';
import Crypt from './Crypt/Crypt';
import Pvp from './Pvp/Pvp';
import Village from './Village/Village';
import classes from './Content.module.css';
import ProfileContainer from './Profile/ProfileContainer';
import DungeonContainer from './Dungeon/DungeonContainer';
import BattleContainer from './Battle/BattleContainer';

const Content = () => {
  return <div className={classes.container}>
    <Route
        path='/profile' render={() => <ProfileContainer />}
    />
    <Route
        path='/battle' render={() => <BattleContainer />}
    />
    <Route
        path='/crypt' render={() => <Crypt />}
    />
    <Route
        path='/dungeon' render={() => <DungeonContainer />}
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