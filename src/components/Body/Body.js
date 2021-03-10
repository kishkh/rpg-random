import React from 'react';

import classes from './Body.module.css';
import Content from './Content/Content';

const Body = () => {
  return <div className={classes.container}>
    <Content />
  </div>
}

export default Body;