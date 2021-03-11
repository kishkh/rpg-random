import { finishFightEnemyCreator } from "./enemy-reducer";

const initialState = JSON.parse(localStorage.getItem('battle')) || {
  player: {
    name: 'user',
    lvl: 0,
    exp: { current: 0, nextLvl: 0 },
    damage: { min: 0, max: 0 },
    hp: { current: 0, full: 0 },
    stats: { coins: 0, win: 0, lose: 0 },
    items: {
      head: '', body: '', weapon: '',
      legs: '', color: ''
    },
    action: 0,
    combo: 0,
    series: 0,
    berserk: false,
    hit: 0,
    death: false,
    resultDamage: null,
    damageInfo: 4,
  },
  enemy: {
    name: 'test',
    id: 0,
    hp: { current: null, full: null },
    damage: { min: null, max: null },
    result: {
      coinWin: 0, coinLeave: 0, coinKill: 0,
      expWin: 0, expLeave: 0, expKill: 0,
    },
    items: {
      head: '', weapon: '',
      body: '', legs: '',
      color: ''
    },
    combo: 0,
    series: 0,
    berserk: false,
    hit: 0,
    death: false,
    resultDamage: 0,
    damageInfo: 4,
    action: 2,
  },
  attackMode: true,
  resultFight: {
    coins: 0, coinsEnemyWin: 0, coinsEnemyKill: 0,
    hp: 0, exp: 0, expEnemyWin: 0, item: 0,
    win: 0, lose: 0
  },
  round: 0,
  modalLeave: false,
  modalWin: false,
  fightHistory: [],
  isFight: false,
}

const randomChoice = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add-battle-data':
      return {
        ...state,
        player: {
          ...state.player,
          name: action.player.name,
          lvl: action.player.lvl,
          exp: { ...action.player.exp },
          damage: { ...action.player.damage },
          hp: { ...action.player.hp },
          stats: { ...action.player.stats },
          items: { ...action.player.items }

        },
        enemy: {
          ...state.enemy,
          name: action.enemy.name,
          id: action.enemy.id,
          hp: { current: action.enemy.hp.current, full: action.enemy.hp.full },
          damage: { min: action.enemy.damage.min, max: action.enemy.damage.max },
          result: { ...action.enemy.result },
          items: { ...action.enemy.items }
        },
      }
    case 'Attack':
      return {
        ...state,
        player: {
          ...state.player,
          action: action.attack
        },
        enemy: {
          ...state.enemy,
          action: randomChoice(1, 3)
        },
      }
    case 'Battle-attack': {
      const { min, max } = state.player.damage
      const result = state.player.action !== state.enemy.action ?
        randomChoice(min, max) : 0;
      const resultDamage = (
        result > 0 ? result + Math.floor(state.player.combo / 2) : 0
      )
      const currentHP = state.enemy.hp.current - resultDamage
      return {
        ...state,
        player: {
          ...state.player,
          combo: result !== 0 ? state.player.combo + result : 0,
          series: result !== 0 ? state.player.series + 1 : 0,
          damageInfo: 4,
          hit: result,
          resultDamage: resultDamage,
        },
        enemy: {
          ...state.enemy,
          hp: {
            ...state.enemy.hp,
            current: currentHP <= 1 ? 1 : currentHP
          },
          berserk: currentHP <= 1,
          damageInfo: result === 0 ? 0 : state.player.action,
          damage: currentHP <= 1 && !state.enemy.berserk ? {
            min: state.enemy.damage.min * 2,
            max: state.enemy.damage.max * 2
          } : { ...state.enemy.damage }
        },
        attackMode: currentHP <= 1

      }
    }
    case 'Defence':
      return {
        ...state,
        player: {
          ...state.player,
          action: action.defence
        },
        enemy: {
          ...state.enemy,
          action: randomChoice(1, 3)
        },
        round: state.round + 1
      }
    case 'Battle-defence': {
      const { min, max } = state.enemy.damage
      const result = state.player.action !== state.enemy.action ?
        randomChoice(min, max) : 0;
      const resultDamage = (
        result > 0 ? result + Math.floor(state.enemy.combo / 2) : 0
      )
      const currentHP = state.player.hp.current - resultDamage
      return {
        ...state,
        enemy: {
          ...state.enemy,
          combo: result !== 0 ? state.enemy.combo + result : 0,
          series: result !== 0 ? state.enemy.series + 1 : 0,
          damageInfo: 4,
          hit: result,
          resultDamage: resultDamage,
        },
        player: {
          ...state.player,
          hp: {
            ...state.player.hp,
            current: currentHP <= 1 ? 1 : currentHP
          },
          damageInfo: result === 0 ? 0 : state.enemy.action,
          berserk: currentHP <= 1,
          damage: currentHP <= 1 && !state.player.berserk ? {
            min: state.player.damage.min * 2,
            max: state.player.damage.max * 2
          } : { ...state.player.damage }
        },
        attackMode: currentHP > 1
      }
    }
    case 'Execution-defence': {
      const result = state.player.action === state.enemy.action;
      return {
        ...state,
        enemy: {
          ...state.enemy,
          combo: 0,
          damageInfo: 4,
        },
        player: {
          ...state.player,
          damageInfo: 4,
          hp: {
            ...state.player.hp,
            current: result ? 0 : 1
          },
          death: result
        },
        attackMode: true
      }
    }
    case 'Execution-attack': {
      const result = state.player.action === state.enemy.action;
      return {
        ...state,
        player: {
          ...state.player,
          damageInfo: 4,
          combo: 0,
        },
        enemy: {
          ...state.enemy,
          damageInfo: 4,
          hp: {
            ...state.enemy.hp,
            current: result ? 0 : 1
          },
          death: result
        },
        attackMode: false
      }
    }
    case 'Start':
      return {
        ...state,
        isFight: true,
      }
    case 'Leave':

      return {
        ...state,
        isFight: false,
        resultFight: {
          ...state.resultFight,
          coinsEnemyKill: state.enemy.result.coinLeave,
          hp: state.player.hp.current,
          exp: state.enemy.result.expLeave,
          lose: 1
        }
      }
    case 'Win':
      return {
        ...state,
        isFight: false,
        resultFight: {
          ...state.resultFight,
          coins: state.enemy.result.coinWin,
          coinsEnemyWin: Math.ceil(state.enemy.result.coinWin * 0.7),
          expEnemyWin: Math.ceil(state.enemy.result.expWin * 0.7),
          hp: state.player.hp.current,
          exp: state.enemy.result.expWin,
          win: 1
        }
      }
    case 'Kill':
      return {
        ...state,
        isFight: false,
        resultFight: {
          ...state.resultFight,
          coins: state.enemy.result.coinKill,
          hp: state.player.hp.current,
          exp: state.enemy.result.expKill,
          win: 1
        }
      }
    case 'Dead':
      return {
        ...state,
        isFight: false,
      }
    case 'Save-local':

      localStorage.setItem('battle', JSON.stringify(state))
      return {
        ...state
      }

    case 'Empty-result':
      localStorage.removeItem('battle')
      return initialState
    case 'Is-leave':
      return { ...state, modalLeave: !state.modalLeave }
    case 'Is-win':
      return { ...state, modalWin: !state.modalWin }
    default:
      return state
  }

}

export const addBattleDataCreator = (player, enemy) => {
  return { type: 'Add-battle-data', player, enemy }
}
export const attackCreator = (attack) => {
  return { type: 'Attack', attack }
}
export const battleAttackCreator = () => {
  return { type: 'Battle-attack' }
}
export const defenceCreator = (defence) => {
  return { type: 'Defence', defence }
}
export const battleDefenceCreator = () => {
  return { type: 'Battle-defence' }
}
export const executionAttackCreator = () => {
  return { type: 'Execution-attack' }
}
export const executionDefenceCreator = () => {
  return { type: 'Execution-defence' }
}
export const startCreator = () => {
  return { type: 'Start' }
}
export const leaveCreator = () => {
  return { type: 'Leave' }
}
export const winCreator = () => {
  return { type: 'Win' }
}
export const killCreator = () => {
  return { type: 'Kill' }
}
export const deadCreator = () => {
  return { type: 'Dead' }
}
export const emptyResultCreator = () => {
  return { type: 'Empty-result' }
}
export const isLeaveCreator = () => {
  return { type: 'Is-leave' }
}
export const isWinCreator = () => {
  return { type: 'Is-win' }
}
export const saveLocalCreator = () => {
  return { type: 'Save-local' }
}
export const startThunkCreator = (player, enemy) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(addBattleDataCreator(player, enemy))
      resolve()
    }).then(() => {
      dispatch(startCreator())
    })
  }
}
export const attackThunkCreator = (attack) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(attackCreator(attack))
      dispatch(battleAttackCreator())
      resolve()
    }).then(() => {
      dispatch(saveLocalCreator())
    })
  }
}
export const defenceThunkCreator = (defence) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(defenceCreator(defence))
      dispatch(battleDefenceCreator())
      resolve()
    }).then(() => {
      dispatch(saveLocalCreator())
    })
  }
}
export const executionAttackThunkCreator = (attack) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(attackCreator(attack))
      dispatch(executionAttackCreator())
      resolve()
    }).then(() => {
      dispatch(saveLocalCreator())
    })
  }
}
export const executionDefenceThunkCreator = (defence) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(defenceCreator(defence))
      dispatch(executionDefenceCreator())
      resolve()
    }).then(() => {
      dispatch(saveLocalCreator())
    })
  }
}
export const finishFightThunkCreator = (result) => {
  return (dispatch) => {
    new Promise((resolve, reject) => {
      dispatch(result())
      resolve()
    }).then(() => {
      dispatch(finishFightEnemyCreator())
    })
  }
}
export default battleReducer;