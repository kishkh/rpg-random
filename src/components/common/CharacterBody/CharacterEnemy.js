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
    case 4:
      items = ['', head, weapon, body, weapon, legs]
      break;
    case 5:
      items = [weapon, head, '', body, weapon, legs]
      break;
    case 6:
      items = [weapon, head, weapon, body, '', legs]
      break;
    default:
      items = ['', head, weapon, body, '', legs]
      break;
  }
  const result = items.map((item, i) => {
    return (<CharacterBox key={`${i + 1}${item}${color}`} color={color} item={item} />)
  })
  return (
    <div className={classes.container}>
      {result}
    </div>
  )
}

export default CharacterEnemy;