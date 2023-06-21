import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CheckOtp() {
  return (
    <div className="container-sm">
    <div className="authentication-wrapper authentication-basic container">
      <div className="authentication-inner d-flex height-vh justify-content-center align-items-center">
        <div className="card">
          <div className="card-body">
            <div className="app-brand justify-content-center">
              <a href="index.html" className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                </span>
                <span className="app-brand-text demo text-body fw-bolder mb-3">ClinicPRO</span>
              </a>
            </div>
            <h4 className="mb-2">Enter your OTP</h4>
            <p className="mb-4">Enter valid OTP and set new password</p>

            <form id="formAuthentication" className="mb-3" action="/set_new_password">
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"
                  name="otp"
                  placeholder="Enter your OTP"
                  autoFocus
                />
              </div>
              
            
              <div className="mb-3">
                <button className="btn btn-primary d-grid w-100" type="submit">Submit</button>
              </div>
            </form>

            <div className="text-center">
                <NavLink to="/" className="d-flex align-items-center justify-content-center">
                  <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm"></i>
                  Back to login
                </NavLink>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
