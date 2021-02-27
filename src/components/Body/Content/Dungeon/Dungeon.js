import React from 'react';
import classes from './Dungeon.module.css'
import Enemy from './Enemy/Enemy';

const Dungeon = (props) => {
  const enemies = props.enemies.map(enemy => {
    return <Enemy enemy={enemy} />
  })
  return <div className={classes.container}>
    {enemies}
  </div>
}

export default Dungeon;