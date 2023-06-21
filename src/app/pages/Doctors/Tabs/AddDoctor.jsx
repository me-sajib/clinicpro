import React, { useState } from 'react'
import DatePicker from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'

export default function AddDoctor() {
  const [dates, setDates] = useState([
    new Date()
  ]);

  return (
    <div className="row">
      <div className="col-xl">
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Add Doctor</h5>
            <div className='d-flex gap-2'>
              <label htmlFor="available">Available</label>
              <DatePicker
                value={dates}
                onChange={setDates}
                format="MMMM DD YYYY"
                sort
                plugins={[
                  <DatePanel />
                ]}
              />
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label" for="fullname">Full Name</label>
                  <input type="text" className="form-control" id="fullname" placeholder="John Doe" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label" for="designation">Designation</label>
                  <input type="text" className="form-control" id="designation" placeholder="Consultant Doctor" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label" for="degree">Degree</label>
                  <input type="text" className="form-control" id="degree" placeholder="M.B.B.S, M.S" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" for="gender">Gender</label>
                  <select name="gender" id="gender" className='form-control'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" for="age">Age</label>
                  <input type="text" className="form-control" id="age" placeholder="26" />

                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label className="form-label" for="phone">Mobile Number</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control phone-mask"
                    placeholder="01XX-XXXXXXX"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" for="address">Address</label>
                <textarea
                  id="address"
                  className="form-control"
                  placeholder="Doctor Address"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
