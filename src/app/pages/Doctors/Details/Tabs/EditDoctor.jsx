import React from 'react'

export default function EditDoctor() {

  return (
    <div className="row">
      <div className="col-xl">
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Edit Information</h5>
            <div className='d-flex gap-2 align-items-center'>
              <label htmlFor="status">Status</label>
              <select name="status" id="" className='form-control'>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label" for="fullname">Full Name</label>
                  <input type="text" className="form-control" id="fullname" value={"hamid"} placeholder="John Doe" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label" for="designation">Designation</label>
                  <input type="text" className="form-control" id="designation" value={"doctor"} placeholder="Consultant Doctor" />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label" for="degree">Degree</label>
                  <input type="text" className="form-control" id="degree" value={"MBBS"} placeholder="M.B.B.S, M.S" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" for="gender">Gender</label>
                  <select name="gender" id="gender" value={"male"} className='form-control'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" for="age">Age</label>
                  <input type="text" className="form-control" value={"26"} id="age" placeholder="26" />

                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label className="form-label" for="phone">Mobile Number</label>
                  <input
                    value={"01822-393128"}
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
                  value={"Mohammadpur, Dhaka."}
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
