import React from 'react'

export default function ShowPatient() {
    return (
        <div className="card p-3">
            {/* table heading */}
            <div className="d-md-flex justify-content-between align-items-center">
                <div className="d-md-flex align-items-center gap-3">
                    <h5>Patient Information</h5>
                </div>
            </div>
            <div className="doctor-info d-flex gap-5">
                <div className="doctor-image">
                    <img src="/assets/img/avatars/1.png" alt="doctor view" />
                </div>
                <div className="doctor-info">
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
            </div>
        </div>
    )
}
