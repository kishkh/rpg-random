import React from 'react';

import '../../App.css';
import classes from './Header.module.css'
import Links from './Links/Links';

const Header = () => {
  return <div className={classes.container}>
    <Links />
  </div>
}

export default Header;