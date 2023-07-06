import React, { useState } from 'react'
import EditPatient from './Tabs/EditPatient'
import PatientDocument from './Tabs/PatientDocument'
import { Link } from 'react-router-dom'

export default function ViewPatient() {
  const [activeTab, setActiveTab] = useState('')
  return (
    <>
      {activeTab === 'edit-patient' ? <EditPatient setActiveTab={setActiveTab} /> : <div className="card p-3">
        {/* table heading */}
        <div className="d-flex justify-content-between align-items-center mb-3 ">
          <Link className="btn-sm btn btn-info" to="/patients">Back</Link>
          <button className="btn-sm btn btn-primary" onClick={() => setActiveTab('edit-patient')}>Edit Patient</button>
        </div>
        <h5>Patient Information</h5>
        <div className="doctor-info py-3">
          <h5>Jahid Islam</h5>
          <div className="d-details">
            <p className="visited"><b>Visited : </b> 3</p>
            <p className="mobile"><b>Mobile : </b> 01988-383329</p>
            <p className="blood"><b>Blood Group : </b> A+</p>
            <p className="gender"><b>Gender : </b> Male</p>
            <p className="age"><b>Age : </b> 24</p>
            <p className="address"><b>Address : </b> Mohammadpur, Dhaka</p>
          </div>

        </div>

        {/* patient documents  */}
        <PatientDocument />
      </div>}

    </>
  )
}
