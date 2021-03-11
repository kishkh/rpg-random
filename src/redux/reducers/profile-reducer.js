const defaultProfile = {
  name: '',
  lvl: 1,
  exp: { current: 0, nextLvl: 100 },
  nextLvlArr: [
    100, 250, 400, 600, 800, 1100, 1400, 1800, 2200, 2700, 3200, 3800, 4400, 5100
  ],
  damage: { min: 2, max: 4 },
  hp: { current: 30, full: 30 },
  skill: 0,
  stats: { win: 0, lose: 0, killed: [], coins: 10 },
  items: {
    head: 'baby_face', body: 'polo_shirt', weapon: 'rock',
    legs: 'trousers', color: 'lightyellow'
  },
  inventoryToggle: false,
  inventory: {
    head: [],
    body: [],
    legs: [],
    weapon: []
  },
  isHealing: true,
  isHealingClass: false,
  created: false,
  date: 0,
}
const initialState = JSON.parse(localStorage.getItem('profile')) || defaultProfile
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Lvl-up':
      return {
        ...state,
        lvl: ++state.lvl,
        exp: {
          ...state.exp,
          nextLvl: state.nextLvlArr[state.lvl - 1]
        },
        hp: {
          ...state.hp,
          current: state.hp.full
        },
        skill: state.skill + 2
      }
    case 'Skill-up-hp':
      return {
        ...state,
        hp: {
          current: state.hp.current + 5,
          full: state.hp.full + 5,
        },
        skill: --state.skill,
      }
    case 'Skill-up-min-damage':
      return {
        ...state,
        damage: {
          ...state.damage,
          min: state.damage.min + 1
        },
        skill: --state.skill,
      }
    case 'Skill-up-max-damage':
      return {
        ...state,
        damage: {
          ...state.damage,
          max: state.damage.max + 1
        },
        skill: --state.skill,
      }
    case 'Update-data':
      return {
        ...state,
        exp: {
          ...state.exp,
          current: state.exp.current + action.data.exp
        },
        hp: {
          ...state.hp,
          current: action.data.hp > 0 ? action.data.hp : state.hp.current
        },
        stats: {
          ...state.stats,
          win: state.stats.win + action.data.win,
          lose: state.stats.lose + action.data.lose,
          coins: state.stats.coins + action.data.coins,
        },
      }
    case 'Heal':
      return {
        ...state,
        hp: {
          ...state.hp,
          current: state.hp.current >= state.hp.full ?
            state.hp.full : state.hp.current + 1,

        }
      }
    case 'Is-healing-true':
      return {
        ...state,
        isHealing: true
      }
    case 'Is-healing-class':
      return {
        ...state,
        isHealingClass: action.result
      }
    case 'Is-healing-false':
      return {
        ...state,
        isHealing: false
      }
    case 'Take-item':

      let artefact;
      switch (action.name) {
        case 'head':
          artefact = {
            head:
              [
                ...state.inventory.head,
                action.item
              ]
          }
          break;
        case 'body':
          artefact = {
            body:
              [
                ...state.inventory.body,
                action.item
              ]
          }
          break;
        case 'legs':
          artefact = {
            legs:
              [
                ...state.inventory.legs,
                action.item
              ]
          }
          break;
        case 'weapon':
          artefact = {
            weapon:
              [
                ...state.inventory.weapon,
                action.item
              ]
          }
          break;
        default:
          break;
      }
      return {
        ...state,
        inventoryToggle: true,
        inventory: {
          ...state.inventory,
          ...artefact
        }
      }
    case 'Is-dead':
      return defaultProfile;
    case 'Create-hero':
      return {
        ...state,
        name: action.heroName,
        inventory: {
          head: [...state.inventory.head, action.items.head],
          body: [...state.inventory.body, action.items.body],
          legs: [...state.inventory.legs, action.items.legs],
          weapon: [...state.inventory.weapon, action.items.weapon],
        },
        items: { ...action.items },
        created: true,
        date: new Date().toLocaleString(),
      }
    case 'Add-kill-enemy':
      return action.head !== '' ? {
        ...state,
        stats: {
          ...state.stats,
          killed: [...state.stats.killed, action.head]
        }
      } : state
    case 'Change-items':
      return {
        ...state,
        items: { ...action.items },
      }
    case 'Toggle-inventory':
      return {
        ...state,
        inventoryToggle: !state.inventoryToggle
      }
    default:
      return state;
  }
}

export const createHeroCreator = (heroName, items) => {
  return { type: 'Create-hero', heroName, items }
}
export const changeItemsCreator = (items) => {
  return { type: 'Change-items', items }
}
export const takeItemCreator = (name, item) => {
  return { type: 'Take-item', name, item }
}
export const toggleInventoryCreator = () => {
  return { type: 'Toggle-inventory' }
}
export const isDeadCreator = () => {
  return { type: 'Is-dead' }
}
export const healCreator = () => {
  return { type: 'Heal' }
}
export const isHealingTrueCreator = () => {
  return { type: 'Is-healing-true' }
}
export const isHealingFalseCreator = () => {
  return { type: 'Is-healing-false' }
}
export const isHealingClassCreator = (result) => {
  return { type: 'Is-healing-class', result }
}
export const lvlUpCreator = () => {
  return { type: 'Lvl-up' }
}
export const updateDataCreator = (data) => {
  return { type: 'Update-data', data }
}
export const skillUpHPCreator = () => {
  return { type: 'Skill-up-hp' }
}
export const skillUpMinDamageCreator = () => {
  return { type: 'Skill-up-min-damage' }
}
export const skillUpMaxDamageCreator = () => {
  return { type: 'Skill-up-max-damage' }
}
export const addKillEnemyCreator = (head) => {
  return { type: 'Add-kill-enemy', head }
}

export const healUpThunkCreator = (hpMin, hpMax) => {
  return (dispatch) => {
    dispatch(isHealingFalseCreator())
    new Promise((resolve, reject) => {
      if (hpMin < hpMax) { 
        resolve()
      } else {
        reject()
      }
    }).then(() => {
      dispatch(isHealingClassCreator(true))
    }).then(() => {
      setTimeout(() => {
        dispatch(healCreator())
        dispatch(isHealingTrueCreator())
        dispatch(isHealingClassCreator(false))
      }, 10000)
    }).catch(() => {
      dispatch(isHealingClassCreator(false))
    })
  }
}

export default profileReducer;