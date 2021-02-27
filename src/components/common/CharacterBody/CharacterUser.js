import React from 'react';
import classes from './CharacterBody.module.css'
import CharacterBox from './CharacterBox/CharacterBox';
import './items.css'

const CharacterUser = (props) => {
  const { color, head, body, legs, weapon } = props.items;
  let items;
  switch (props.action) {
    case 1:
      items = [head, weapon, body, '', legs, '']
      break;
    case 3:
      items = [head, '', body, '', legs, weapon]
      break;
    case 4:
      items = [head, '', body, weapon, legs, weapon]
      break;
    case 5:
      items = [head, weapon, body, '', legs, weapon]
      break;
    case 6:
      items = [head, weapon, body, weapon, legs, '']
      break;
    default:
      items = [head, '', body, weapon, legs, '']
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

export default CharacterUser;