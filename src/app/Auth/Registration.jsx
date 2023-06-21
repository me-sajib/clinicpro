import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
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
              <h4 className="mb-2">Digitalize starts here 🚀</h4>
              <p className="mb-4">Make your Clinic management easy!</p>

              <form id="formAuthentication" className="mb-3" action="/dashboard">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    autofocus
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    placeholder="Enter your mobile"
                    autoFocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="password">Password</label>
                    <NavLink to="/forget_password">
                      <small>Forgot Password?</small>
                    </NavLink>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="*************"
                      aria-describedby="password"
                    />
                    {/* password show and hide button */}
                    <span className="input-group-text cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <i className="bx bx-show"></i> : <i className="bx bx-hide"></i>}
                    </span>

                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                    <label className="form-check-label" for="terms-conditions">
                      I agree to
                      <a href="j#s">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100">Sign up</button>
              </form>

              <p className="text-center">
                <span>Already have an account?</span>
                <NavLink to="/">
                  <span>Sign in instead</span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
