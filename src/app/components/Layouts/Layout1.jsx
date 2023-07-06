import React, { useState } from 'react'
import Header from './Header'
import TopNavbar from './TopNavBar'
import { Outlet } from 'react-router-dom'

export default function Layout1() {
  const [navbarExpand, setNavbarExpand] = useState(false);
  
  return (
    <div className={`layout-wrapper layout-content-navbar ${navbarExpand ? 'layout-menu-expanded' : ""}`} >
    <div className="layout-container">
      {/* aside navbar */}
      <Header setNavbarExpand={setNavbarExpand} />
      <div className="layout-page">
        {/* navbar */}
        <TopNavbar setNavbarExpand={setNavbarExpand} navbarExpand={navbarExpand} />
        {/* / navbar */}
        {/* content */}
        {/* <!-- Content wrapper --> */}
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y" onClick={()=> setNavbarExpand(false)}>
            <Outlet/>
          </div>
          </div>
      </div>
    </div>
    {/* overly */}
    <div className="layout-overlay layout-menu-toggle" onClick={()=> setNavbarExpand(false)}></div>
  </div>
  )
}
