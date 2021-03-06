import React from 'react';

import classes from './Arena.module.css'
import Enemy from './Enemy/Enemy';

const Arena = (props) => {

  let enemies = props.enemies.filter(enemy => {
    return enemy.death === false 
  })
  enemies = enemies.map(enemy => <Enemy key = {enemy.id}enemy={enemy} startFightEnemy={props.startFightEnemy} />)
  return <div className={classes.container}>
    {enemies.slice(0, 4)}
  </div>
}

export default Arena;