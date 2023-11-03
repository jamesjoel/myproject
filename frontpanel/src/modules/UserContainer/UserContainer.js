import React from 'react'
import { Outlet } from 'react-router-dom'

const UserContainer = () => {
  return (
    <div style={{minHeight : "700px"}}>
        <Outlet/>
    </div>
  )
}

export default UserContainer