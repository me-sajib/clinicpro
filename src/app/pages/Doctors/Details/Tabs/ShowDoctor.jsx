import React from 'react'

export default function ShowDoctor() {
    return (
        <div className="card p-3">
            {/* table heading */}
            <div className="d-md-flex justify-content-between align-items-center">
                <div className="d-md-flex align-items-center gap-3">
                    <h5>Doctor Information</h5>
                </div>
            </div>
            <div className="doctor-info d-flex gap-5">
                    <div className="doctor-image d-done">
                        <img src="/assets/img/avatars/1.png" alt="doctor view" />
                    </div>
                    <div className="doctor-info">
                        <h5>Hamid Khan</h5>
                        <div className="d-details">
                            <p className="patients"><b>Patients : </b> 249</p>
                            <p className="designation"><b>Designation : </b> Doctor</p>
                            <p className="degree"><b>Degree : </b> M.B.B.S</p>
                            <p className="gender"><b>Gender : </b> Male</p>
                            <p className="age"><b>Age : </b> 29</p>
                            <p className="mobile"><b>Mobile : </b> 01822-393128</p>
                            <p className="address"><b>Address : </b> Mohammadpur, Dhaka</p>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}
