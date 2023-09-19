import { ADD_COUNTRIES,ADD_ACTIVITIES,SEARCH_NAME,ORDER, FILTER, FILTER_ACTIVITY, FILTER_CONTINENT } from "./action-types";
import axios from 'axios'

export const addCountries=()=>{
    const URL_BASE='http://127.0.0.1:5000' 
    return (dispatch)=>{
        axios.get(`${URL_BASE}/countries/`)
        .then(response=>{
            const data=response.data
                if (data[0].name) {
                    return dispatch({
                        type:ADD_COUNTRIES,
                        payload:data
                    })
                } else {
                    return dispatch( {
                        type:ADD_COUNTRIES,
                        payload:[]
                    })
                }
        })
        axios.get(`${URL_BASE}/activities/`)
        .then(response=>{   
            const data=response.data
            if (data[0][0].name) {
                return dispatch({
                    type:ADD_ACTIVITIES,
                    payload:data
                })
            } else {
                return dispatch({
                    type:ADD_ACTIVITIES,
                    payload:[]
                })
            }
        })
        .catch(()=>{
            return dispatch({
                type:ADD_ACTIVITIES,
                payload:[]
            })
        })

    }    
}
export const searchName=(name)=>{
    
    const endpoint='http://127.0.0.1:5000/countries/name?name='+name
    return (dispatch) =>{
        axios.get(endpoint)
        .then(({data})=>{
            
            return dispatch({
                type:SEARCH_NAME,
                payload:data
            })
        })
        .catch(()=>{
            return dispatch({
                type:SEARCH_NAME,
                payload:[]
            })
        })
    }
}
// export const filterContinent=(continent)=>{
//         return{type:FILTER_CONTINENT,payload:continent}    
// }

// export const filterActivity=(activity)=>{
//     return{type:FILTER_ACTIVITY,payload:activity}
// }
export const filter=(continent,activity)=>{
    return{type:FILTER,payload:[continent,activity]}
}
export const orderCountries=(order)=>{
    return{type:ORDER,payload:order}
}