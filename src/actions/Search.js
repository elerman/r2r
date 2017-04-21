import {push} from 'react-router-redux'
import {store} from '../app'
import _ from 'underscore'

export const RESULTS = 'RESULTS'
const results = (results)=>{
    return {type:RESULTS, results}
}

export const FIRE_SEARCH = 'FIRE_SEARCH'
export const fireSearch = ()=>{
    store.dispatch(push('/results'))
    return {type: FIRE_SEARCH}
}

export const GO_SEARCH = 'GO_SEARCH'
export const goSearch = ()=>{
    store.dispatch(push('/search'))
    return {type: GO_SEARCH}
}

export const GET_RESULTS = "GET_RESULTS"
export const getResults = (oPlace, dPlace)=>{
    return (dispatch)=>{
        dispatch(loading)
        
        let oname = _.isObject(oPlace) ? oPlace.shortName.replace(/ *\([^)]*\) */g, ""): oPlace
        let dname = _.isObject(dPlace) ? dPlace.shortName.replace(/ *\([^)]*\) */g, ""): dPlace

        let api = `http://free.rome2rio.com/api/1.4/json/Search?key=xeOAhXI4&oName='${oname}'&dName=${dname}`
        return fetch(api)
        .then(response => {
            if(!response.ok){
                dispatch(push('/404'))
            }else
                response.json()
                .then(json => {
                    dispatch(results(json))
                    dispatch(push(`/results/${oname}/${dname}`))
                })
        })
    }
}

export const SEARCH_PARAM = 'SEARCH_PARAM'
export const searchParam = (place, ref) => {
    return {type: SEARCH_PARAM, place: place, reference: ref}
}

export const LOADING = 'LOADING'
export const loading = {type:LOADING}