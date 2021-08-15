const { createStore, applyMiddleware } = require('redux')
const thunkMiddleware = require('redux-thunk').default //Required for async actions
const axios = require('axios')

const initialState = {
  loading: false,
  users: [],
  error: null
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (err) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: 
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS: 
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case FETCH_USERS_FAILURE: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: state
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())