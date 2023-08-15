import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitData, setSubmitData] = useState(false);
  const [formData, setData] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;

    if (phone === "" || password === "") {
      setError("Field must not be empty");
      return;
    } else {
      setError("");
      setData({phone, password });
      setSubmitData(true);
    }
  }

  useEffect(() => {
    if (submitData) {
      fetch("http://localhost:3300/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          
          const {token} = data;
          localStorage.setItem("access_token", token)
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
              <h4 className="mb-2">Welcome to ClinicPRO! 👋</h4>
              <p className="mb-4">Please sign-in to your account</p>

              <form id="formAuthentication" className="mb-3" onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="phone"
                    placeholder="Enter your mobile or username"
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
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                <NavLink to="/registration">
                  <span>Create an account</span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
