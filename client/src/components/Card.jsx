import React from "react";
import styles from './Card.module.css'
import { NavLink } from "react-router-dom";
// import { ADD_FAV,REMOVE_FAV } from "../redux/action-types";
function Card({id,flagImage,name,continent}) {
   return (
      <div className={styles.card}>
         <NavLink to={`/countries/${id}`}style={{ textDecoration: 'none' }}>
         <div> 
            <img  src={flagImage} alt="" />
            <div className={styles.cardTitle}>
               {name}
            </div> 
            <h2>{continent}</h2>

         </div>
         </NavLink>  
      </div>
   );
}

export default Card;



