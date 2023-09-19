import { ADD_COUNTRIES,ADD_ACTIVITIES,FILTER,FILTER_ACTIVITY,FILTER_CONTINENT,ORDER,SEARCH_NAME } from "./action-types";
const initialState={
    filterCountries:[],
    originCountries:[],
    activities:[]
}

const reducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case FILTER:
            console.log(payload)
            let countriesFilter=payload[0]==='x'? state.originCountries:
            state.originCountries.filter(favFilter=>favFilter.continent===payload[0])
            
            
            
            if(payload[1]==='x'){

            } else {
                const activitiesIdFilter=[]
                state.activities[0].forEach(e=>{
                    if(e.name===payload[1]) {
                        activitiesIdFilter.push(e.id)
                    }
                }) 
                const countriesIdFilter=[]
                state.activities[1].forEach(e => {
                    if(activitiesIdFilter.includes(e.ActivityId)){
                        if(!countriesIdFilter.includes(e.CountryId))
                            return countriesIdFilter.push(e.CountryId)
                    }
                })
                countriesFilter=countriesFilter.filter(e=>countriesIdFilter.includes(e.id))
            }
            return {
                ...state,
                filterCountries:countriesFilter
            }        
        // case FILTER_CONTINENT:
        //     return {
        //         ...state,
        //         filterCountries:
        //         payload==='x'? state.originCountries:
        //         state.originCountries.filter(favFilter=>favFilter.continent===payload)
        //     }
        // case FILTER_ACTIVITY:
        //     let countriesFilter=[]
        //     if(payload==='x') {
        //         countriesFilter=state.originCountries
        //     }
        //     else {
        //         const activitiesIdFilter=[]
        //         state.activities[0].forEach(e=>{
        //             if(e.name===payload) {
        //                 activitiesIdFilter.push(e.id)
        //             }
        //         }) 
        //         const countriesIdFilter=[]
        //         state.activities[1].forEach(e => {
        //             if(activitiesIdFilter.includes(e.ActivityId)){
        //                 if(!countriesIdFilter.includes(e.CountryId))
        //                     return countriesIdFilter.push(e.CountryId)
        //             }
        //         })
        //         countriesFilter=state.originCountries.filter(e=>countriesIdFilter.includes(e.id))
        //     }
        //     return {
        //         ...state,
        //         filterCountries:countriesFilter
        //     } 
        case ADD_COUNTRIES:
            return {
                ...state,
                filterCountries:payload,
                originCountries:payload
            }
        case SEARCH_NAME:
            if(payload.length===0) {
            return {
                    ...state,
                    filterCountries:state.originCountries

            }
            } else 
            return {
                ...state,
                filterCountries:payload
            }

        case ORDER:
            let copy=[...state.filterCountries]
            if (payload==='NA') 
                copy.sort((a,b)=> a.name.localeCompare(b.name))
            else if (payload==='ND') 
                copy.sort((a,b)=> b.name.localeCompare(a.name))
            else if (payload==='PA') 
                copy.sort((a,b)=> a.population - b.population)
            else if (payload==='PD') 
                copy.sort((a,b)=> b.population - a.population)
           
            return {
                ...state,
                filterCountries:copy
            }
        case ADD_ACTIVITIES:
            return {
                ...state,
                activities:payload,
            }

        default:
            return{...state}
    }
}

export default reducer;