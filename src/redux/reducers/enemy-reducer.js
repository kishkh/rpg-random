const initialState = {
  enemies: [
    {
      name: 'Cosmonaut',
      lvl: 1,
      id: 1,
      hp: { current: 20, full: 20 },
      damage: { min: 2, max: 3 },
      items: {
        head: 'astro_head', weapon: 'astro_fist',
        body: 'astro_body', legs: 'astro_legs',
        color: 'white'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 50, expLeave: 5, expKill: 150,
      },
      death: false

    },
    {
      name: 'Barbarian',
      lvl: 5,
      id: 2,
      hp: { current: 50, full: 50 },
      damage: { min: 15, max: 27 },
      items: {
        head: 'barbarian_head', weapon: 'barbarian_weapon',
        body: 'barbarian_body', legs: 'barbarian_legs',
        color: 'lightpink'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 50, expLeave: 5, expKill: 150,
      },
      death: false
    },
    {
      name: 'Pirate',
      lvl: 4,
      id: 3,
      hp: { current: 50, full: 50 },
      damage: { min: 6, max: 8 },
      items: {
        head: 'pirate_head', weapon: 'pirate_hook',
        body: 'pirate_body', legs: 'pirate_legs',
        color: 'yellow'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 101, expLeave: 5, expKill: 150,
      },
      death: false
    },
    {
      name: 'Skeleton',
      lvl: 3,
      id: 4,
      hp: { current: 20, full: 20 },
      damage: { min: 2, max: 3 },
      items: {
        head: 'skelet_head', weapon: 'skelet_weapon',
        body: 'skelet_body', legs: 'skelet_legs',
        color: 'white'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 50, expLeave: 5, expKill: 150,
      },
      death: false
    },
    {
      name: 'Dwarf',
      lvl: 2,
      id: 5,
      hp: { current: 20, full: 20 },
      damage: { min: 2, max: 3 },
      items: {
        head: 'dwarf_head', weapon: 'dwarf_weapon',
        body: 'dwarf_body', legs: 'dwarf_legs',
        color: 'orange'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 50, expLeave: 5, expKill: 150,
      },
      death: false
    },
  ]
}

const enemiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Is-enemy-dead':
      return {
        enemies: state.enemies.map( enemy => {
          return enemy.id === action.id ? 
            {...enemy, death: action.death} :
            enemy
        })
      }
    case 'Restart':
      return initialState
    default:
      break;
  }
  return state
}
export const isEnemyDeadCreator = (id, death) => {
  return { type: 'Is-enemy-dead', id, death}
}
export const restartCreator = () => {
  return {type: 'Restart'}
}

export default enemiesReducer;