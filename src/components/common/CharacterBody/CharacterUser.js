import React from 'react';
import classes from './CharacterBody.module.css'
import CharacterBox from './CharacterBox/CharacterBox';
import '../../../assets/classes/enemiesItems.css'

const CharacterUser = (props) => {
  const { color, head, body, legs, weapon } = props.player.items;
  let items;
  switch (props.player.action) {
    case 1:
      items = [head, weapon, body, '', legs, '']
      break;
    case 3:
      items = [head, '', body, '', legs, weapon]
      break;
    default:
      items = [head, '', body, weapon, legs, '']
      break;
  }
  let checkClass;
  switch (props.player.damageInfo) {
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
      break;
    default:
      break;
  }
  const result = items.map((item, i) => {
    return (<div key={`${i+1}wrap`} className={classes.wrapper}>
      {
        (i + 1) % 2 === 1 &&
        <div className={classes.textContainer}>
          <span className={item === checkClass ? `${classes.active} ${classes.damage}` : classes.damage}>{props.enemyDamage}</span>
        </div>
      }
      <CharacterBox key={`${i + 1}${item}${color}`} checkClass={checkClass} color={color} weapon={weapon} item={item} />
      {
        (i + 1) % 2 === 0 &&
        <div className={classes.textContainer}>
          <span className={ item === checkClass ? `${classes.active} ${classes.miss}` : classes.miss}>Block</span>
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

export default CharacterUser;