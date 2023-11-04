import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminContainer from '../AdminContainer/AdminContainer'
import About from '../Component/Pages/About/About'
import Charts from '../Component/Pages/Charts/Charts'
import Form from '../Component/Pages/Form/Form'
import AdminLogin from '../Component/Pages/AdminLogin/AdminLogin'
import Dashboard from '../Component/Pages/Dashnoard/Dashboard'


const Allroute = () => {
  return (
  <>
 
  <Routes>
  <Route path=''element={<AdminLogin/>}/>

    <Route path=''element={<AdminContainer/>}>
      <Route path='about'element={<About/>}/>
      <Route path='charts'element={<Charts/>}/>
      <Route path='form'element={<Form/>}/>
      <Route path='dashboard'element={<Dashboard/>}/>

      
    </Route>
  </Routes>

  </>
)
}

export default Allroute