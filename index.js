const createStore = require('redux').createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

// Action
const buyCake = (amount = 1) => {
  return {
    type: BUY_CAKE,
    amount
  }
}

const buyIceCream = (amount = 1) => {
  return {
    type: BUY_ICE_CREAM,
    amount
  }
}

// Reducer

// Initial State
const initialState = {
  numOfCakes: 50,
  numOfIceCreams: 70
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.amount
      }
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.amount
      }
    default: return state
  }
}

const store = createStore(reducer)

console.log('Initial Store', store.getState())
const unsubscribe = store.subscribe((state) => console.log('Updated State: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake(2))
store.dispatch(buyCake(3))
store.dispatch(buyIceCream(7))
store.dispatch(buyCake(4))
store.dispatch(buyCake(5))
store.dispatch(buyIceCream(20))
unsubscribe()