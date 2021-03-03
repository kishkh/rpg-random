const defaultProfile =  {
  name: 'Andrew',
  lvl: 1,
  exp: { current: 0, nextLvl: 100 },
  nextLvlArr: [
    100, 250, 400, 600, 800, 1100, 1400, 1800, 2200, 2700, 3200, 3800, 4400, 5100
  ],
  attack: 1,
  defence: 1,
  damage: { min: 2, max: 4 },
  hp: { current: 40, full: 40 },
  skill: 0,
  stats: { win: 0, lose: 0, killed: 0, coins: 100 },
  items: {
    head: 'baby_face', body: 'polo_shirt', weapon: 'spoon',
    legs: 'trousers', color: 'lightyellow'
  },
  isHealing: false,
  isHealingClass: false,
  created: true,
  freeItems: { head: 1 }
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
        skill: ++state.skill
      }
    case 'Skill-up':
      return {
        ...state,
        attack: action.attack,
        defence: action.defence,
        skill: --state.skill,
        hp: {
          full: 30 + (action.defence * 10),
          current: 30 + (action.defence * 10)
        },
        damage: {
          min: Math.ceil(state.damage.max / 2),
          max: 3 + (action.attack),
        },
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
          win: state.stats.win + action.data.win,
          lose: state.stats.lose + action.data.lose,
          killed: state.stats.killed + action.data.killed,
          coins: state.stats.coins + action.data.coins,
        },

      }
    case 'Heal':
      return {
        ...state,
        hp: {
          ...state.hp,
          current: state.hp.current >= state.hp.full ? state.hp.full : state.hp.current + 1,

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
    case 'Is-dead':
      return defaultProfile;
    default:
      return state;
  }
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
export const skillUpCreator = (attack, defence) => {
  return { type: 'Skill-up', attack, defence }
}

export default profileReducer;