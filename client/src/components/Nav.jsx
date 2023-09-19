import styles from './Nav.module.css'
import React from 'react'
import SearchBar from './SearchBar.jsx'
import Filters from './Filters.jsx'
import {NavLink } from 'react-router-dom'
import { addCountries } from '../redux/actions'
import { connect } from 'react-redux';

class Nav extends React.Component{
    handleHome=()=>{
        this.props.addCountries()
    }
    render() {
        return (
          <div className={styles.nav}>
            <div className={styles.links}>
              <NavLink to="/home" onClick={this.handleHome}>
                <img className={styles.logoHome} src="../../public/logoL.png" alt="" />
              </NavLink>
              <NavLink to="/newActivity" className={styles.link}>
              ㊉ Actividad
              </NavLink>
            </div>
      
            <Filters/>
      
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


