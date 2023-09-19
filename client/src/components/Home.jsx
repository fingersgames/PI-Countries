import React from "react";
import styles from './Home.module.css';
import Card from './Card.jsx'
import { connect } from 'react-redux';
import { useState } from "react";
import {useEffect } from 'react'
const Home=(props)=> {
   // const useE=useEffect();
   window.scrollTo({ top: 0, behavior: 'smooth' });     

   const [page, setPage] = useState(1);
   
   let {filterCountries} = props
   
   const totalPages=Math.ceil(filterCountries.length/10)
   
   const filterCountries2=filterCountries.slice((page-1)*10,(page-1)*10+10)
   
   useEffect(()=>setPage(1),[filterCountries])
   
   const handlePageDown = () => {
      setPage(page - 1);
   }
   
   const handlePageUp = () => {
      setPage(page + 1);
   }

   return (
      <div className={styles.container}>
         <div className={styles.country}>
            {filterCountries2.length !== 0 ? (
               <>
                  {filterCountries2.map((e) => (
                     <Card 
                        key={e.id}
                        id={e.id}
                        flagImage={e.flagImage}
                        name={e.name}
                        continent={e.continent}
                     />
                  ))}

               </>
            ) : (
               <p>Nada por aqui...</p>
            )}               
 
         </div>           
         <div className={styles.country}>
            <button className={styles.botonPage} onClick={handlePageDown} disabled={page === 1}>←</button>
            <p>{page+'/'+totalPages}</p>
            <button className={styles.botonPage} onClick={handlePageUp} disabled={page === totalPages}>→</button>
         </div>
      </div>
   );
}

const mapStateToProp=(state)=>{
   return {
     filterCountries:state.filterCountries
   }
 }
 export default connect(mapStateToProp,null)(Home)
 
