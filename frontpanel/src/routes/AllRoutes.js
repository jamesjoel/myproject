import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/features/Home/Home'
import About from '../components/features/About/About'
import UserContainer from '../modules/UserContainer/UserContainer'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>

        <Route path='user' element={<UserContainer/>}>
          <Route/>
        </Route>
    </Routes>
    </>
  )
}

export default AllRoutes