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