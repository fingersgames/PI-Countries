import { useNavigate, useParams } from 'react-router-dom';
import styles from './Detail.module.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
const Detail=()=>{
    const activities = useSelector(state => state.activities);
    const navigate=useNavigate();
    const {idPais} = useParams();
    const [country,setCountry]=useState([]);
    useEffect(()=>{
        const URL_BASE='http://127.0.0.1:5000/countries'
        // const KEY='1359a0baf0ef.3553cb7fc991adca2846'
        axios(`${URL_BASE}/${idPais}`)
        .then(response=>setCountry(response.data))
        }
    ,[])
    if(activities.length){
        const activitiesCountry=activities[1].filter(e=>e.CountryId===country.id)
        const activitiesIdCountry=activitiesCountry.map(e=>e.ActivityId)
        const activitiesFilter=activities[0].filter(e=>activitiesIdCountry.includes(e.id))
        var activitiesNameFilter=activitiesFilter.map(e=>e.name)
        
   
    }
    return(
        <div className={styles.Detail}>
            {
                country.name?
                <>
                    <button className={styles.boton} onClick={()=>navigate('/home')}>x</button>
                    <div className={styles.cardTitle}>{country.name}</div>
                    <p>Continente: {country.continent}</p>
                    <p>Capital: {country.capital}</p>
                    <p>Subregion: {country.subregion}</p>
                    <p>Area: {country.area} km2</p>
                    <p>Población: {country.population}</p>
                    <img src={country.flagImage} alt="" />
                   
                    {
                        activitiesNameFilter? (//si pongo activitiesNameFIlter.length me da error por que no existe el array
                            <>
                                <p>Actividades:</p>
                                {
                                    activitiesNameFilter.map(act => (
                                        <p>• {act}</p>
                                    ))
                                }
                            </>
                        ) : null
                    }
                </>
                : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    )
}
export default Detail;