import {combineReducers} from 'redux'
import searchReducer from './Search'
import resultsReducer from './Results'
import {routerReducer} from 'react-router-redux'

const reducers = combineReducers({searchReducer, resultsReducer, routing: routerReducer})

export default reducers