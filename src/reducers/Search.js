import * as SEARCH from '../actions/Search'

const initialState = {
    results: null,
    oPlace: null,
    dPlace: null
}

const searchReducer = (state = initialState, action)=>{
    switch(action.type){
        case SEARCH.RESULTS:
            return Object.assign({},state,{results : action.results});
        break;
        case SEARCH.SEARCH_PARAM:
            let place = action.place
            return Object.assign({},state, {[action.reference]:place})
        break;
        default:
            return state;
    }
}

export default searchReducer