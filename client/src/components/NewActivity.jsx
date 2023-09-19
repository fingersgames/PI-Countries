import styles from "./NewActivity.module.css"
import {useState } from "react" 
import validation from "./validation.js"
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addCountries} from "../redux/actions";
import { useNavigate} from 'react-router-dom'
const NewActivity =()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [actividadCreada,setActividadCreada]=useState('')
    const [errors,setErrors]=useState(
        {
            name: "",
            duration: 0,
            countries:[]
        }
    )  
 
    const [activity,setActivity]=useState(
        {
            name: "",
            difficulty: 1,
            duration: 0,
            season: "Verano",
            countries: []
        }
    )

    function newActivity(activity) {
        const URL_BASE='http://127.0.0.1:5000'

        axios.post(`${URL_BASE}/activities`, activity)
        .then(response => {
            console.log(response.data)
            setActividadCreada(response.data)
            dispatch(addCountries())

        })
        .catch(error => {
            console.log(error.response.data)
            setActividadCreada(error.response.data)
        });
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
         newActivity(activity)
    }
    const handleChange=(event)=>{
        let value= event.target.value
        console.log(errors.countries)
        if (event.target.name === "duration" || event.target.name === "difficulty") {
            value = parseFloat(value);
          }
        if (event.target.name==='countries') value = value.split(",")
        setActivity(
            {
                ...activity,
                [event.target.name]:value
            }
        )
        setErrors(validation({...activity,[event.target.name]:event.target.value}))

    }
    const handleCancel=()=>{
        navigate('/home')
    }


    return(
        <div className={styles.form}>
            {actividadCreada===''
            ?   
            <form  onSubmit={handleSubmit} >
                {/* <label>Crear nueva actividad</label><br /><br /> */}
                <div className={styles.itemForm}>
                    <label htmlFor="">Nombre: </label>
                    <input onChange={handleChange} placeholder='Ingrese nombre de actividad...' type="text" name="name" value={activity.name} />
                    {errors.name? <span>{errors.name}</span>: null}                    
                </div>


                <div className={styles.itemForm}>
                    <label htmlFor="">Duración: </label>
                    { <input onChange={handleChange} placeholder='Ingrese duración en horas...' type="number" name="duration" value={activity.duration} /> }
                    {errors.duration? <span>{errors.duration}</span>: <span></span> }         
                </div>

                <div className={styles.itemForm}>

                    <label htmlFor="">Dificultad: </label>
                    <select name="difficulty" value={activity.difficulty} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>                   
                </div>
                <div className={styles.itemForm}>
                    <label htmlFor="">Temporada: </label>
                    <select name="season" value={activity.season} onChange={handleChange}>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </div>

                <div className={styles.itemForm}>       
                    <label htmlFor="">Paises: </label>
                    <input  type="text" placeholder='Codigos de paises separado por coma...' name="countries" value={activity.countries} onChange={handleChange} />
                    {errors.countries.length !== 0? <span>{errors.countries}</span>: null}       
                </div>
                <button disabled ={errors.name || errors.duration|| errors.countries.length !== 0}  className={styles.formBtn} type="submit">Crear actividad</button>
                <button className={styles.formBtn} type="button" onClick={()=>handleCancel()}>Cancelar</button>
                
            </form>
            :
            <div>
                <h2>{actividadCreada}</h2>
                <button className={styles.formBtn} onClick={() => setActividadCreada('')}>Atras</button>
            </div>
            }
        </div>
    )
    
}
export default NewActivity;