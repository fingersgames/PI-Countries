import { ADD_COUNTRIES,FILTER,ORDER,SEARCH_NAME } from "./action-types";
const initialState={
    filterCountries:[],
    originCountries:[]
}

const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_COUNTRIES:
            return {
                ...state,
                // filterCountries:[...state.originCountries, payload ],
                // originCountries:[...state.originCountries, payload ]
                filterCountries:payload,
                originCountries:payload
            }
        case SEARCH_NAME:
            return {
                ...state,
                // originCountries: state.originCountries.filter(fav=>fav.id!=payload),
                // filterCountries: state.originCountries.filter(fav=>fav.id!=payload)
                filterCountries:payload,
                originCountries:payload
            }
        case FILTER:
            return {
                ...state,
                filterCountries:
                payload==='x'? state.originCountries:
                state.originCountries.filter(favFilter=>favFilter.gender===payload)
            }
        case ORDER:
            let copy=[...state.filterCountries]
            if (payload==='A') 
                copy.sort((a,b)=> a.id - b.id)
            else if (payload==='D') 
                copy.sort((a,b)=> b.id - a.id)
            else copy=[...state.originCountries]
            return {
                ...state,
                filterCountries:copy
            }
        default:
            return{...state}
    }
}

export default reducer;