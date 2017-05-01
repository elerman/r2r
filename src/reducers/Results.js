import * as ACTIONS from '../actions/Results'

const initialState = {
    selectedRoute : null
}

const resultsReducer = (state = initialState, action)=>{
    switch(action.type){
        case ACTIONS.ROUTE_SELECTION:
            return Object.assign({}, state, {selectedRoute: action.route})

        default:
            return state
    }
}

export default resultsReducer