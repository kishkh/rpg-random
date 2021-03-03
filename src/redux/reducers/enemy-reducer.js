const defaultEnemies = {
  enemies: [
    {
      name: 'Cosmonaut',
      lvl: 1,
      id: 1,
      hp: { current: 30, full: 30 },
      damage: { min: 2, max: 4 },
      items: {
        head: 'astro_head', weapon: 'astro_fist',
        body: 'astro_body', legs: 'astro_legs',
        color: 'white'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 30, expLeave: 3, expKill: 90,
      },
      death: false
    },
    {
      name: 'Barbarian',
      lvl: 4,
      id: 2,
      hp: { current: 40, full: 40 },
      damage: { min: 5, max: 7 },
      items: {
        head: 'barbarian_head', weapon: 'barbarian_weapon',
        body: 'barbarian_body', legs: 'barbarian_legs',
        color: 'lightpink'
      },
      result: {
        coinWin: 40, coinLeave: -40, coinKill: 120,
        expWin: 70, expLeave: 7, expKill: 210,
      },
      death: false
    },
    {
      name: 'Skeleton',
      lvl: 2,
      id: 4,
      hp: { current: 20, full: 20 },
      damage: { min: 2, max: 8 },
      items: {
        head: 'skelet_head', weapon: 'skelet_weapon',
        body: 'skelet_body', legs: 'skelet_legs',
        color: 'white'
      },
      result: {
        coinWin: 20, coinLeave: -20, coinKill: 60,
        expWin: 50, expLeave: 5, expKill: 150,
      },
      death: false
    },
    {
      name: 'Dwarf',
      lvl: 3,
      id: 5,
      hp: { current: 60, full: 60 },
      damage: { min: 2, max: 3 },
      items: {
        head: 'dwarf_head', weapon: 'dwarf_weapon',
        body: 'dwarf_body', legs: 'dwarf_legs',
        color: 'orange'
      },
      result: {
        coinWin: 30, coinLeave: -30, coinKill: 90,
        expWin: 60, expLeave: 6, expKill: 180,
      },
      death: false
    },
    {
      name: 'Pirate',
      lvl: 5,
      id: 3,
      hp: { current: 40, full: 40 },
      damage: { min: 4, max: 10 },
      items: {
        head: 'pirate_head', weapon: 'pirate_hook',
        body: 'pirate_body', legs: 'pirate_legs',
        color: 'yellow'
      },
      result: {
        coinWin: 60, coinLeave: -60, coinKill: 180,
        expWin: 90, expLeave: 9, expKill: 270,
      },
      death: false
    },
  ]
}
const initialState = JSON.parse(localStorage.getItem('enemies')) || defaultEnemies
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
      return defaultEnemies
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