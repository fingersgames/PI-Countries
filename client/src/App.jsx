import './App.css';

import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';
import Landpage from './components/Landpage.jsx'
import Detail from './components/Detail'
import NewActivity from './components/NewActivity'

import { useEffect, useState } from "react";
import { Routes, Route,useLocation, useNavigate} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { addCountries } from './redux/actions';

function App({addCountries}) {
  console.log(typeof(addCountries))
  const location = useLocation();
  const navigate = useNavigate();  
  const [access,setAccess]=useState(false)
  const login=()=>{
      setAccess(true)
      access && navigate('/home')
      addCountries()
  }
  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  return (
    <div className='App'>
      {location.pathname!=='/' ?<Nav /> : null}
      <Routes>
        <Route
          path='/' element={<Landpage login={login}/>}
        />
        <Route 
          path='/home' element={<Home />}
        />
        <Route 
          path='/countries/:idPais' element={<Detail />}
        />  
        <Route 
          path='/newActivity' element={<NewActivity/>}
        />    
      </Routes>

    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return{
      addCountries: ()=>{dispatch(addCountries())}
  }
}
export default connect(null,mapDispatchToProps)(App)





