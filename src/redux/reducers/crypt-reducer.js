const initialState = JSON.parse(localStorage.getItem('crypt')) || {
  heroes: []
}
const cryptReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Update-crypt-data':
      return {
        ...state,
        heroes: [...state.heroes, { ...action.data }]
      }
    case 'Sort-by-exp':

      return {
        ...state,
        heroes: [
          ...state.heroes.sort((a, b) => {
            if (a.exp.current < b.exp.current) {
              return 1;
            } else if (a.exp.current > b.exp.current) {
              return -1;
            }
            return 0;
          })
        ]
      }
    case 'Sort-by-kills':

      return {
        ...state,
        heroes: [
          ...state.heroes.sort((a, b) => {
            if (a.stats.killed.length < b.stats.killed.length) {
              return 1;
            } else if (a.stats.killed.length > b.stats.killed.length) {
              return -1;
            }
            return 0;
          })
        ]
      }
    case 'Sort-by-date':

      return {
        ...state,
        heroes: [
          ...state.heroes.sort((a, b) => {
            if (new Date(a.date) < new Date(b.date)) {
              return 1;
            } else if (new Date(a.date) > new Date(b.date)) {
              return -1;
            }
            return 0;
          })
        ]
      }

    default:
      break;
  }
  return state
}
export const updateCryptDataCreator = (data) => {
  return { type: 'Update-crypt-data', data }
}
export const sortByDateCreator = () => {
  return { type: 'Sort-by-date' }
}
export const sortByExpCreator = () => {
  return { type: 'Sort-by-exp' }
}
export const SortByKillsCreator = () => {
  return { type: 'Sort-by-kills' }
}

export default cryptReducer;