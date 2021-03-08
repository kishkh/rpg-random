const defaultEnemies = {
  enemies: [
    {
      name: 'Skeleton',
      lvl: 1,
      id: 1,
      hp: { current: 25, full: 25 },
      damage: { min: 2, max: 3 },
      items: {
        head: 'skelet_head', weapon: 'skelet_weapon',
        body: 'skelet_body', legs: 'skelet_legs',
        color: 'white'
      },
      result: {
        coinWin: 1, coinLeave: -1, coinKill: 4,
        expWin: 30, expLeave: 3, expKill: 90,
      },
      death: false
    },


    {
      name: 'Cosmonaut',
      lvl: 2,
      id: 2,
      hp: { current: 35, full: 35 },
      damage: { min: 2, max: 5 },
      items: {
        head: 'astro_head', weapon: 'astro_fist',
        body: 'astro_body', legs: 'astro_legs',
        color: 'white'
      },
      result: {
        coinWin: 2, coinLeave: -1, coinKill: 6,
        expWin: 40, expLeave: 4, expKill: 120,
      },
      death: false
    },

    {
      name: 'Mummy',
      lvl: 3,
      id: 3,
      hp: { current: 25, full: 25 },
      damage: { min: 3, max: 9 },
      items: {
        head: 'mummy_head', weapon: 'mummy_weapon',
        body: 'mummy_body', legs: 'mummy_legs',
        color: 'bisque'
      },
      result: {
        coinWin: 3, coinLeave: -2, coinKill: 9,
        expWin: 60, expLeave: 6, expKill: 180,
      },
      death: false
    },
    {
      name: 'GrandF',
      lvl: 4,
      id: 4,
      hp: { current: 30, full: 30 },
      damage: { min: 1, max: 14 },
      items: {
        head: 'grandF_head', weapon: 'grandF_weapon',
        body: 'grandF_body', legs: 'grandF_legs',
        color: 'darkkhaki'
      },
      result: {
        coinWin: 4, coinLeave: -2, coinKill: 12,
        expWin: 75, expLeave: 8, expKill: 225,
      },
      death: false
    },
    {
      name: 'Barbarian',
      lvl: 5,
      id: 5,
      hp: { current: 60, full: 60 },
      damage: { min: 5, max: 7 },
      items: {
        head: 'barbarian_head', weapon: 'barbarian_weapon',
        body: 'barbarian_body', legs: 'barbarian_legs',
        color: 'lightpink'
      },
      result: {
        coinWin: 5, coinLeave: -3, coinKill: 15,
        expWin: 70, expLeave: 7, expKill: 210,
      },
      death: false
    },
    {
      name: 'Pirate',
      lvl: 6,
      id: 6,
      hp: { current: 40, full: 40 },
      damage: { min: 7, max: 12 },
      items: {
        head: 'pirate_head', weapon: 'pirate_hook',
        body: 'pirate_body', legs: 'pirate_legs',
        color: 'yellow'
      },
      result: {
        coinWin: 6, coinLeave: -3, coinKill: 18,
        expWin: 90, expLeave: 9, expKill: 270,
      },
      death: false
    },
    {

      name: 'Ogr',
      lvl: 7,
      id: 7,
      hp: { current: 80, full: 80 },
      damage: { min: 6, max: 8 },
      items: {
        head: 'ogr_head', weapon: 'ogr_weapon',
        body: 'ogr_body', legs: 'ogr_legs',
        color: 'burlywood'
      },
      result: {
        coinWin: 7, coinLeave: -4, coinKill: 21,
        expWin: 60, expLeave: 6, expKill: 180,
      },
      death: false
    },

    {
      name: 'Dwarf',
      lvl: 8,
      id: 8,
      hp: { current: 115, full: 115 },
      damage: { min: 4, max: 6 },
      items: {
        head: 'dwarf_head', weapon: 'dwarf_weapon',
        body: 'dwarf_body', legs: 'dwarf_legs',
        color: '#332929'
      },
      result: {
        coinWin: 8, coinLeave: -4, coinKill: 24,
        expWin: 60, expLeave: 6, expKill: 180,
      },
      death: false
    },
    {
      name: 'Executor',
      lvl: 9,
      id: 9,
      hp: { current: 75, full: 75 },
      damage: { min: 7, max: 14 },
      items: {
        head: 'executor_head', weapon: 'executor_weapon',
        body: 'executor_body', legs: 'executor_legs',
        color: 'indianred'
      },
      result: {
        coinWin: 9, coinLeave: -5, coinKill: 27,
        expWin: 60, expLeave: 6, expKill: 180,
      },
      death: false
    },
    {
      name: 'Goblin',
      lvl: 10,
      id: 10,
      hp: { current: 50, full: 50 },
      damage: { min: 7, max: 22 },
      items: {
        head: 'goblin_head', weapon: 'goblin_weapon',
        body: 'goblin_body', legs: 'goblin_legs',
        color: 'forestgreen'
      },
      result: {
        coinWin: 10, coinLeave: -5, coinKill: 30,
        expWin: 30, expLeave: 5, expKill: 90,
      },
      death: false
    },
    {
      name: 'Cop',
      lvl: 11,
      id: 11,
      hp: { current: 90, full: 90 },
      damage: { min: 8, max: 16 },
      items: {
        head: 'cop_head', weapon: 'cop_weapon',
        body: 'cop_body', legs: 'cop_legs',
        color: 'cornflowerblue'
      },
      result: {
        coinWin: 11, coinLeave: -6, coinKill: 33,
        expWin: 30, expLeave: 5, expKill: 90,
      },
      death: false
    },



  ]
}

const initialState = JSON.parse(localStorage.getItem('enemies')) || defaultEnemies
const enemiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Update-enemy-data':
      return {
        enemies: state.enemies.map(enemy => {
          return enemy.id === action.id ?
            {
              ...enemy,
              result: {
                ...enemy.result,
                coinWin: action.data.coinsEnemyWin !== 0 ? action.data.coinsEnemyWin : enemy.result.coinWin,
                coinKill: (enemy.result.coinKill > enemy.result.coinWin + 5) ? 
                  enemy.result.coinKill + action.data.coinsEnemyKill :
                  enemy.result.coinKill,
                expWin: action.data.expEnemyWin !== 0 ? action.data.expEnemyWin : enemy.result.expWin
              }
            } : enemy
        })
      }

    case 'Is-enemy-dead':
      return {
        enemies: state.enemies.map(enemy => {
          return enemy.id === action.id ?
            { ...enemy, death: action.death } :
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
export const updateEnemyDataCreator = (data, id) => {
  return { type: 'Update-enemy-data', data, id }
}
export const isEnemyDeadCreator = (id, death) => {
  return { type: 'Is-enemy-dead', id, death }
}
export const restartCreator = () => {
  return { type: 'Restart' }
}

export default enemiesReducer;