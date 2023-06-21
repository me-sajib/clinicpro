import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ResetPassword() {
  return (
    <div className="container-sm">
    <div className="authentication-wrapper authentication-basic container">
      <div className="authentication-inner d-flex height-vh justify-content-center align-items-center">
        <div className="card">
        <div className="card-body">
              <div className="app-brand justify-content-center">
                <a href="/#" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                  </span>
                  <span className="app-brand-text demo text-body fw-bolder mb-3">ClinicPRO</span>
                </a>
              </div>
              <h4 className="mb-2">Forgot Password? 🔒</h4>
              <p className="mb-4">Enter your mobile and we'll send you instructions to reset your password</p>
              <form id="formAuthentication" className="mb-3" action="/check_otp">
                <div className="mb-3">
                  <label for="mobile" className="form-label">mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    autofocus
                  />
                </div>
                <button className="btn btn-primary d-grid w-100">Send Reset CODE</button>
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
