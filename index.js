const { combineReducers, createStore } = require('redux')

const { cakeReducer, iceCreamReducer } = require('./modules')

const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
const BUY_CAKE = 'BUY_CAKE'

// Action
const buyIceCream = (amount = 1) => {
  return {
    type: BUY_ICE_CREAM,
    amount
  }
}
const buyCake = (amount = 1) => {
  return {
    type: BUY_CAKE,
    amount
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

const store = createStore(rootReducer)
console.log('Initial Store', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake(2))
store.dispatch(buyCake(3))
store.dispatch(buyIceCream(7))
store.dispatch(buyCake(4))
store.dispatch(buyCake(5))
store.dispatch(buyIceCream(20))
unsubscribe()