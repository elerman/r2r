import {combineReducers} from 'redux'
import searchReducer from './Search'
import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({searchReducer, routing: routerReducer})

export default reducers