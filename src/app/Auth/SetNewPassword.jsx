import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SetNewPassword() {
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
            <h4 className="mb-2">Welcome to ClinicPRO! 👋</h4>
            <p className="mb-4">Please sign-in to your account</p>

            <form id="formAuthentication" className="mb-3" action="/dashboard">
              
                <div className="mb-3">
                <label for="new_password" class="form-label">New Password</label>
                  <input
                    type="password"
                    id="new_password"
                    className="form-control"
                    name="password"
                    placeholder="*************"
                    aria-describedby="password"
                  />
                 
                </div>

                <div className="mb-3">
                <label for="confirm_password" class="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm_password"
                    className="form-control"
                    name="confirm_password"
                    placeholder="*************"
                    aria-describedby="confirm_password"
                  />
                 
                </div>
             
              <div className="mb-3">
                <button className="btn btn-primary d-grid w-100" type="submit">Create Password</button>
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
