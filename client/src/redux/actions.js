import { ADD_COUNTRIES,SEARCH_NAME,ORDER,FILTER } from "./action-types";
import axios from 'axios'

export const addCountries=()=>{
    const URL_BASE='http://127.0.0.1:5000' 
    return (distpach)=>{
        axios.get(`${URL_BASE}/countries/`)
        .then(response=>{
            const data=response.data
          
            if (data[0].name) {
                distpach({
                    type:ADD_COUNTRIES,
                    payload:data
                })
            } else {
                dispatch( {
                    type:ADD_COUNTRIES,
                    payload:[]
                })
            }
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
export const filterCards=(gender)=>{
    return{type:FILTER,payload:gender}
}
export const orderCards=(order)=>{
    return{type:ORDER,payload:order}
}