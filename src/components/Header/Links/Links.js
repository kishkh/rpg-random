import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Links.module.css';

const Links = () => {

  return <div className={classes.container}>
    <NavLink to='/profile' activeClassName={classes.active} className={classes.link}> 
      <div className={classes.profile}>
      </div>
      <span>Profile</span>
    </NavLink>
    <NavLink to='/village' activeClassName={classes.active} className={classes.link}> 
      <div className={classes.village}>
      </div>
      <span>Village</span>
    </NavLink>
    <NavLink to='/arena' activeClassName={classes.active} className={classes.link}> 
      <div className={classes.arena}>
      </div>
      <span>Arena</span>
    </NavLink>
    <NavLink to='/pvp' activeClassName={classes.active} className={classes.link}> 
      <div className={classes.pvp}>
      </div>
      <span>PvP</span>
    </NavLink>
    <NavLink to='/crypt' activeClassName={classes.active} className={classes.link}> 
      <div className={classes.crypt}>
      </div>
      <span>Crypt</span>
    </NavLink>
    
  </div>
}

export default Links;