const initialState = {
  heroes:[]
}

const cryptReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Update-crypt-data':
      return {
        ...state,
        heroes: [...state.heroes, { ...action.data }]
      }
  
    default:
      break;
  }
  return state
}
export const updateCryptDataCreator = (data) => {
  return {type: 'Update-crypt-data', data}
}
export default cryptReducer;