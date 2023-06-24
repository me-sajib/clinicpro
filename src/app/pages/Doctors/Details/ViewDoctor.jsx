import React, { useState } from 'react'
import ShowDoctor from './Tabs/ShowDoctor'
import EditDoctor from './Tabs/EditDoctor'

export default function ViewDoctor() {
  const [activeTab, setActiveTab] = useState('doctor')
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
              id='doctor'
              onClick={()=> setActiveTab('doctor')}
            >
              Doctor
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
              id='edit-doctor'
              onClick={()=> setActiveTab('edit-doctor')}
            >
              Edit Doctor
            </button>
          </li>
        </ul>
      </div>
      {activeTab === 'doctor' && <ShowDoctor />}
      {activeTab === 'edit-doctor' && <EditDoctor />}
    </>
  )
}
