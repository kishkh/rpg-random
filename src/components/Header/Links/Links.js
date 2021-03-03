import React from 'react';
import classes from './Links.module.css';
import ProfileLinkContainer from './LinkProfileContainer/ProfileLinkContainer';
import Link from './Link/Link';

const Links = () => {

  return <div className={classes.container}>
    <ProfileLinkContainer />
    <Link link='/village' icon={classes.village} text='Village' />
    <Link link='/arena' icon={classes.arena} text='Arena' />
    <Link link='/pvp' icon={classes.pvp} text='PvP' />
    <Link link='/crypt' icon={classes.crypt} text='Crypt' />
  </div>
}

export default Links;