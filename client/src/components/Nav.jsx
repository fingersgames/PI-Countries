import styles from './Nav.module.css'
import React from 'react'
import SearchBar from './SearchBar.jsx'
import {NavLink } from 'react-router-dom'
import { addCountries } from '../redux/actions'
import { connect } from 'react-redux';

class Nav extends React.Component{
    handleHome=()=>{
        this.props.addCountries()
    }
    handleFilter=(event)=>{
        console.log(event.target.value)

        console.log('dispatch filter')
    }
    handleOrder=(event)=>{
     
    }


    render(){
        return(
            <div className={styles.nav}>
                <div className={styles.links}>
                    <NavLink to="/home" onClick={this.handleHome}>
                        <img className={styles.logoHome} src="../../public/logoL.png" alt=""/>
                    </NavLink> 
                </div>
                <div className={styles.links}>
                    <NavLink to="/newActivity" className={styles.link}>
                        Agregar Actividad
                    </NavLink>
                </div>       
                <div className={styles.links}>
                <div className={styles.filtros}>
                    <label htmlFor="order">Ordenar por: &nbsp; </label>
                    <select id="order"  onChange={handleOrder} defaultValue='B'>
                        <option value="B" disabled hidden></option>
                        <option value="x">Ninguno</option>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                                        
                    <label htmlFor="filter">&nbsp; Filtrar por: &nbsp;</label>
                    <select id="filter"  onChange={handleFilter} defaultValue='B'>
                        <option value="B" disable hidden></option>
                        <option value="x">Ninguno</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select> 
                </div>
                </div>    

             
                
                                
                <SearchBar onSearch={this.props.onSearch} />    
      
            </div>            
        )

    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addCountries: ()=>{dispatch(addCountries())}
    }
  }
export default connect(null,mapDispatchToProps)(Nav);