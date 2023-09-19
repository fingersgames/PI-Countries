import styles from './Filters.module.css'
import { useDispatch, useSelector } from "react-redux";
import { orderCountries,filter} from "../redux/actions";

const Filters=()=>{
    const dispatch=useDispatch();
    const activities = useSelector(state => state.activities);
    // console.log('activi',activities[0])

    // const handleFilterContinent=(event)=>{
    //     dispatch(filterContinent(event.target.value))
    //     dispatch(orderCountries(document.getElementById("order").value))
       
    // }
    // const handleFilterActivity=(event)=>{
    //     dispatch(filterActivity(event.target.value))
    //     dispatch(orderCountries(document.getElementById("order").value))
     
    // }
    const handleOrder=(event)=>{
        dispatch(orderCountries(event.target.value))
    }


    const handleSelect=(event)=>{
        dispatch(filter(
                document.getElementById("filterContinent").value,
                document.getElementById("filterActivity").value
            )
        )
        dispatch(orderCountries(document.getElementById("order").value))
    }
    return (
        <div className={styles.filtros}>
            <label htmlFor="order"></label>
            <select id="order" onChange={handleOrder} defaultValue='B'>
                <option value="x" disabled hidden>Ordenar</option>
                <option value="x">Ninguno</option>
                <option value="PA">Menor Población</option>
                <option value="PD">Mayor Población</option>
                <option value="NA">Nombre Ascendente</option>
                <option value="ND">Nombre Descendente</option>
            </select>

            <select id="filterContinent" onChange={handleSelect} defaultValue='B'>
                <option value="x" disabled hidden>Continente</option>
                <option value="x">Ninguno</option>
                <option value="South America">Sudamérica</option>
                <option value="North America">Norteamérica</option>
                <option value="Asia">Asia</option>
                <option value="Africa">África</option>
                <option value="Antarctica">Antártida</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceanía</option>
            </select>

            <select id="filterActivity" onChange={handleSelect} defaultValue="B">
                <option value="x" disabled hidden>Actividad</option>
                <option value="x">Ninguno</option>
                {
                activities.length?        
                activities[0].map(option => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                ))
                : null
                }
            </select>
        </div>
    )
}
export default Filters

