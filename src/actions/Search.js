export const RESULTS = 'RESULTS'
const results = (results)=>{
    return {type:RESULTS, results}
}

export const SEARCH = 'SEARCH'
export const search = (oName, dName)=>{
    return (dispatch)=>{
        let api = `http://free.rome2rio.com/api/1.4/json/Search?key=xeOAhXI4&oName=${oName}&dName=${dName}`
        return fetch(api)
        .then(response => response.json())
        .then(json => dispatch(results(json)))
    }
}

export const SEARCH_PARAM = 'SEARCH_PARAM'
export const searchParam = (place, ref) => {
    return {type: SEARCH_PARAM, place: place, reference: ref}
}