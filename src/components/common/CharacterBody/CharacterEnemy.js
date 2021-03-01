import React from 'react';
import classes from './CharacterBody.module.css'
import CharacterBox from './CharacterBox/CharacterBox';
import './items.css'

const CharacterEnemy = (props) => {
  
  const { color, head, body, legs, weapon} = props.enemy.items;
  let items;
  switch (props.enemy.action) {
    case 1:
      items = [weapon, head, '', body, '', legs]
      break;
    case 3:
      items = ['', head, '', body, weapon, legs]
      break;
    default:
      items = ['', head, weapon, body, '', legs]
      break;
  }
  let checkClass;
  switch (props.enemy.damageInfo) {
    case 1:
      checkClass = head
      break;
    case 2:
      checkClass = body
      break;
    case 3:
      checkClass = legs
      break;
    case 0:
      checkClass = weapon
    default:
      break;
  }
  const result = items.map((item, i) => {
    return (
      <div className={classes.wrapperEnemy}>
        {
          (i + 1) % 2 === 1 &&
          <div className={classes.textContainer}>
            <span className={ item === checkClass ? `${classes.active} ${classes.miss}` : classes.miss}>Block</span>
            
          </div>
        }
        <CharacterBox key={`${i + 1}${item}${color}`} checkClass={checkClass}  color={color} item={item} weapon={weapon} />
        {
        (i + 1) % 2 === 0 &&
        <div className={classes.textContainer}>
          <span className={item === checkClass ? `${classes.active} ${classes.damage}` : classes.damage}>{props.playerDamage}</span>
        </div>
      }
      </div>
    )
  })
  return (
    <div className={classes.container}>
      {result}
    </div>
  )
}

export default CharacterEnemy;