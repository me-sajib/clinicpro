import React, { useState } from 'react'
import AllDoctorsTab from './Tabs/AllDoctorsTab'
import AddDoctor from './Tabs/AddDoctor'

export default function Doctors() {
  const [activeTab, setActiveTab] = useState('all-doctors')
  return (
    <>
      <div className="nav-align-top mb-4">
        <ul className="nav nav-pills mb-3" role="tablist">
          <li className="nav-item">
            <button
              type="button"
              className="nav-link active"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-pills-top-home"
              aria-controls="navs-pills-top-home"
              aria-selected="true"
              id='all-doctors'
              onClick={()=> setActiveTab('all-doctors')}
            >
              All Doctors
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-pills-top-profile"
              aria-controls="navs-pills-top-profile"
              aria-selected="false"
              id='add-doctor'
              onClick={()=> setActiveTab('add-doctor')}
            >
              Add Doctor
            </button>
          </li>
        </ul>
      </div>
      {
        activeTab === 'all-doctors' && <AllDoctorsTab />
      }
      {
        activeTab === 'add-doctor' && <AddDoctor />
      }
    </>
  )
}
