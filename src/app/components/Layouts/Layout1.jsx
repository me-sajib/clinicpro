import React from 'react'
import Header from './Header'
import TopNavbar from './TopNavBar'
import { Outlet } from 'react-router-dom'

export default function Layout1() {
  return (
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      {/* aside navbar */}
      <Header />
      <div className="layout-page">
        {/* navbar */}
        <TopNavbar />
        {/* / navbar */}
        {/* content */}
        {/* <!-- Content wrapper --> */}
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            <Outlet/>
          </div>
          </div>
      </div>
    </div>
    {/* overly */}
    <div className="layout-overlay layout-menu-toggle"></div>
  </div>
  )
}
