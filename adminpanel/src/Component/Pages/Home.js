import React from 'react'
import SideNavBar from '../Sherd/SideNavBar/SideNavBar'
import PartialNavBar from '../Sherd/PartialNavBar/PartialNavBar'
import UpgradeToPro from '../Sherd/UpgradtoPro/UpgradetoPro'
import GrowthBox from '../Sherd/GrowthBox/GrowthBox'
import Tranjections from '../Sherd/Tranjection/Tranjections'
import ReveneuSalesBox from '../Sherd/RevenueSalesBox/ReveneuSalesBox'
import MsgPortDiv from '../Sherd/MsgPortDiv/MsgPortDiv'
import OrderBox from '../Sherd/OrderBox/OrderBox'
import VisitorByCountry from '../Sherd/VisitorByCountry/VisitorByCountry'
import Footer from '../Sherd/Footer/Footer'

const Home = () => {
  return (
<>
<>


    <div className="container-scroller">
     <SideNavBar/>
      <div className="container-fluid page-body-wrapper">
      <PartialNavBar/>
        <div className="main-panel">
          <div className="content-wrapper">
            <UpgradeToPro/>
            <GrowthBox/>
            <Tranjections/>
            <ReveneuSalesBox/>
            <OrderBox/>
            <MsgPortDiv/>
           <VisitorByCountry/>
           </div> 
           <Footer/>
        </div>
      </div>
    </div>
</>  
</>  )
}

export default Home