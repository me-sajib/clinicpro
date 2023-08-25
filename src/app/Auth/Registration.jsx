import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { validateNumber } from '../../Utils/validateNumber';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitData, setSubmitData] = useState(false);
  const [formData, setData] = useState([]);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    // check phone number bangladeshi or not 
    if(validateNumber(phone) === false) {
      setError("Invalid Phone Number");
      return;
    }

    if (name === "" || phone === "" || password === "") {
      setError("Field must not be empty");
      return;
    } else {
      setError("");
      setData({ name, phone, password });
      setSubmitData(true);
    }
  }

  useEffect(() => {
    if (submitData) {
      fetch("http://localhost:3300/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      })
        .then(res => res.json())
        .then(data => {
          if (data.token) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Registration Successful!',
              showConfirmButton: false,
              timer: 1500
            })
            localStorage.setItem("access_token", data.token);
            navigate("/dashboard");
          }
          setSubmitData(false)
        });
    }
  }, [submitData])

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

              {
                error && <div className="alert alert-danger">{error}</div>
              }
              <form id="formAuthentication" className="mb-3" onSubmit={handleRegistration}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="name"
                    placeholder="Enter your username"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="phone"
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
                    <label className="form-check-label" htmlFor="terms-conditions">
                      I agree to
                      <a href="j#s">privacy policy & terms</a>
                    </label>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100" type='submit'>Sign up</button>
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
