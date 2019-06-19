import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import hackerNewsReducer from './hackerNewsReducer'
import mediumReducer from './mediumReducer'

const rootReducer = combineReducers({
    hackerNewsReducer,
    mediumReducer
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware))