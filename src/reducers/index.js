import * as ACTIONS from '../actions/index'

const initialState = {
    results: null
}

export const appReducer = (state = initialState, action)=>{
    switch(action.type){
        case ACTIONS.RESULTS:
            console.log(action.results)
            return Object.assign({},state,{results : action.results});
        break;
        default:
            return state;
    }
}