export const RESULTS = 'RESULTS'
const results = (results)=>{
    return {type:RESULTS, results}
}

export const SEARCH = 'SEARCH'
export const search = (oPlace, dPlace)=>{
    return (dispatch)=>{
        dispatch(loading)
        let oname = oPlace.shortName.replace(/ *\([^)]*\) */g, "")
        let dname = dPlace.shortName.replace(/ *\([^)]*\) */g, "")
        let api = `http://free.rome2rio.com/api/1.4/json/Search?key=xeOAhXI4&oName='${oname}'&dName=${dname}`
        return fetch(api)
        .then(response => response.json())
        .then(json => {
            dispatch(results(json))
            dispatch()
        })
    }
}

export const SEARCH_PARAM = 'SEARCH_PARAM'
export const searchParam = (place, ref) => {
    return {type: SEARCH_PARAM, place: place, reference: ref}
}

export const LOADING = 'LOADING'
export const loading = {type:LOADING}