const BUY_CAKE = 'BUY_CAKE'

// Reducer

// Initial State
const initialState = {
  numOfCakes: 50,
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.amount
      }
    default: return state
  }
}

// const store = createStore(reducer)

module.exports = reducer