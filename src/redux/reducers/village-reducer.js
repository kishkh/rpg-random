const initialState = JSON.parse(localStorage.getItem('village')) || {
  village:{
    name: 'Village',
    house: 1,
    gym: 1,
  }
}

const villageReducer = (state = initialState, action) => {
  return state
}

export default villageReducer;