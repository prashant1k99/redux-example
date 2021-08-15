const createStore = require('redux').createStore

// Store
const BUY_CAKE = 'BUY_CAKE'

// Action
const buyCake = (amount = 1) => {
  return {
    type: BUY_CAKE,
    amount
  }
}

// Reducer

// Initial State
const initialState = {
  numOfCakes: 50
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - action.amount
      }
    default: return state
  }
}

const store = createStore(reducer)

console.log('Initial Store', store.getState())
const unsubscribe = store.subscribe((state) => console.log('Updated State: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake(2))
store.dispatch(buyCake(3))
store.dispatch(buyCake(4))
store.dispatch(buyCake(5))
unsubscribe()