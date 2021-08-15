const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// Reducer

// Initial State
const initialState = {
  numOfIceCreams: 70
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.amount
      }
    default: return state
  }
}

module.exports = reducer