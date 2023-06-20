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


    render() {
        return (
          <div className={styles.nav}>
            <div className={styles.links}>
              <NavLink to="/home" onClick={this.handleHome}>
                <img className={styles.logoHome} src="../../public/logoL.png" alt="" />
              </NavLink>
              <NavLink to="/newActivity" className={styles.link}>
                Agregar Actividad
              </NavLink>
            </div>
      
            <div className={styles.filtros}>
              <label htmlFor="order"></label>
              <select id="order" onChange={this.handleOrder} defaultValue='B'>
                <option value="B" disabled hidden>Ordenar</option>
                <option value="x">Ninguno</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>
      
              <select id="filter" onChange={this.handleFilter} defaultValue='B'>
                <option value="B" disabled hidden>Continente</option>
                <option value="x">Ninguno</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Antartida">Antartida</option>
                <option value="Europa">Europa</option>
                <option value="Oceania">Oceania</option>
              </select>
              <select id="filter" onChange={this.handleFilter} defaultValue='B'>
                <option value="B" disabled hidden>Actividad</option>
                <option value="x">Ninguno</option>
                <option value="America">Con Actividades</option>
                <option value="Asia">Sin Actividades</option>

              </select>
            </div>
      
            <SearchBar onSearch={this.props.onSearch} />
          </div>
        );
      }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addCountries: ()=>{dispatch(addCountries())}
    }
  }
export default connect(null,mapDispatchToProps)(Nav);


