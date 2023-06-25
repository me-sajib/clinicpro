import React from 'react'
import { useState } from 'react'
import ShowPatient from './Tabs/ShowPatient'
import EditPatient from './Tabs/EditPatient'
import PatientDocument from './Tabs/PatientDocument'

export default function ViewPatient() {
  const [activeTab, setActiveTab] = useState('patient')
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
            id='patient'
            onClick={()=> setActiveTab('patient')}
          >
            Patient
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
            id='edit-patient'
            onClick={()=> setActiveTab('edit-patient')}
          >
            Edit Patient
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
            id='documents'
            onClick={()=> setActiveTab('documents')}
          >
            Documents
          </button>
        </li>
      </ul>
    </div>

    {activeTab === 'patient' && <ShowPatient />}
    {activeTab === 'edit-patient' && <EditPatient />}
    {activeTab === 'documents' && <PatientDocument />}
   
  </>
  )
}
