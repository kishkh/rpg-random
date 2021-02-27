const initialState = {
  enemies: [
    {
      name: 'Cosmonaut',
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
      }

    },
    {
      name: 'Barbarian',
      id: 2,
      hp: { current: 25, full: 25 },
      damage: { min: 3, max: 4 },
      items: {
        head: 'barbarian_head', weapon: 'barbarian_weapon',
        body: 'barbarian_body', legs: 'barbarian_legs',
        color: 'lightpink'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 50, expLeave: 5, expKill: 150,
      }
    },
    {
      name: 'Pirate',
      id: 3,
      hp: { current: 20, full: 20 },
      damage: { min: 2, max: 3 },
      items: {
        head: 'pirate_head', weapon: 'pirate_hook',
        body: 'pirate_body', legs: 'pirate_legs',
        color: 'yellow'
      },
      result: {
        coinWin: 10, coinLeave: -10, coinKill: 30,
        expWin: 101, expLeave: 5, expKill: 150,
      }
    },
    {
      name: 'Skeleton',
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
      }
    },
    {
      name: 'Dwarf',
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
      }
    },
  ]
}

const enemiesReducer = (state = initialState, action) => {
  return state
}

export default enemiesReducer;