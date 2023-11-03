import React from 'react'
import Home from '../Component/Pages/Home'
import { Route, Routes } from 'react-router-dom'
import AdminContainer from '../AdminContainer/AdminContainer'
import About from '../Component/Pages/About/About'
import Charts from '../Component/Pages/Charts/Charts'
import Form from '../Component/Pages/Form/Form'
import AdminLogin from '../Component/Pages/AdminLogin/AdminLogin'


const Allroute = () => {
  return (
  <>
 
  <Routes>
  <Route path=''element={<Home/>}/>
    <Route path=''element={<AdminContainer/>}>
      <Route path='about'element={<About/>}/>
      <Route path='charts'element={<Charts/>}/>
      <Route path='form'element={<Form/>}/>
      <Route path='adminlogin'element={<AdminLogin/>}/>
      
    </Route>
  </Routes>

  </>
)
}

export default Allroute