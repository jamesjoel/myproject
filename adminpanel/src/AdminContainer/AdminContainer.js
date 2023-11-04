import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavBar from '../Component/Sherd/SideNavBar/SideNavBar'

const AdminContainer = () => {
  return (
<>
{/* <SideNavBar />  */}
<Outlet/>
</>  )
}

export default AdminContainer