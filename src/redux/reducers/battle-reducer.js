const initialState = {
  player: {
    name: 'user',
    lvl: 0,
    exp: { current: 0, nextLvl: 0 },
    attack: 0,
    defence: 0,
    damage: { min: 0, max: 0 },
    hp: { current: 0, full: 0 },

    stats: { coins: 0, win: 0, lose: 0, killed: 0 },
    items: {
      head: '', body: '', weapon: '',
      legs: '', color: ''
    },
    action: 0,
    combo: 0,
    berserk: false,
    hit: 0,
    death: false,
    resultDamage: 0
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
    berserk: false,
    hit: 0,
    death: false,
    resultDamage: 0,
    action: 2,
  },
  attackMode: true,
  resultFight: {
    coins: 0, hp: 0,
    exp: 0, win: 0, lose: 0,
    killed: 0, item: 0
  },
  round: 0,
  fightHistory: []
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
          attack: action.player.attack,
          defence: action.player.defence,
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
    case 'Add-history':
      const history = `Player: attack:${state.player.action.attack} Enemy defence: ${state.enemy.action} hit: ${state.player.hit} combo: ${state.player.combo} Total damage: ${state.player.resultDamage} enemyaction${state.enemy.action} `;
      const enemyHistory = `Enemy: attack:${state.enemy.action} Player defence: ${state.player.action.defence} hit: ${state.enemy.hit} combo: ${state.enemy.combo} Total damage: ${state.enemy.resultDamage} nemyaction${state.enemy.action}`;
      return {
        ...state,
        fightHistory: [...state.fightHistory, state.attackMode ? enemyHistory : history]
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
        attackMode: false,
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
        attackMode: true,
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
          hit: result,
          resultDamage: resultDamage,
        },
        player: {
          ...state.player,
          hp: {
            ...state.player.hp,
            current: currentHP <= 1 ? 1 : currentHP
          },
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
          hit: 100,
        },
        player: {
          ...state.player,
          hp: {
            ...state.player.hp,
            current: result ? 0 : 1
          },
          death: result
        },
      }
    }
    case 'Execution-attack': {
      const result = state.player.action === state.enemy.action;
      return {
        ...state,
        player: {
          ...state.player,
          combo: 0,
          hit: 100,
        },
        enemy: {
          ...state.enemy,
          hp: {
            ...state.enemy.hp,
            current: result ? 0 : 1
          },
          death: result
        },
      }
    }
    case 'Leave':
      return {
        ...state,
        resultFight: {
          ...state.resultFight,
          coins: state.enemy.result.coinLeave,
          hp: state.player.hp.current,
          exp: state.enemy.result.expLeave,
          lose: 1
        }
      }
    case 'Win':
      return {
        ...state,
        resultFight: {
          ...state.resultFight,
          coins: state.enemy.result.coinWin,
          hp: state.player.hp.current,
          exp: state.enemy.result.expWin,
          win: 1
        }
      }
    case 'Kill':
      return {
        ...state,
        resultFight: {
          ...state.resultFight,
          coins: state.enemy.result.coinKill,
          hp: state.player.hp.current,
          exp: state.enemy.result.expKill,
          win: 1, killed: 1
        }
      }
    case 'Die':
      return {
        ...state,
        resultFight: {
          ...state.resultFight,
          coins: action.data.coinWin, playerHp: action.hp,
          exp: action.data.expWin,
          win: 1
        }
      }
    case 'Empty-result':
      return initialState
    default:
      return state
  }

}



export const addHistoryCreator = () => {
  return { type: 'Add-history' }
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


export const leaveCreator = () => {
  return { type: 'Leave' }
}
export const winCreator = () => {
  return { type: 'Win' }
}
export const killCreator = () => {
  return { type: 'Kill' }
}
export const dieCreator = () => {
  return { type: 'Die' }
}

export const emptyResultCreator = () => {
  return { type: 'Empty-result' }
}
export default battleReducer;