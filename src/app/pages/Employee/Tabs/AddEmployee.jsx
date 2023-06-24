import React from 'react'

export default function AddEmployee() {
  return (
    <div className="row">
    <div className="col-xl">
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Add Employee</h5>
          <div className="status d-flex gap-3 align-items-center">
            {/* set active or inactive status  */}
            <label htmlFor="status">Status</label>
            <select name="status" id="status" className='form-control'>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label" for="role">User Role</label>
                <select name="role" id="role" className='form-control'>
                  <option value="admin">Admin</option>
                  <option value="doctor">Doctor</option>
                  <option value="accountant">Accountant</option>
                  <option value="laboratorist">Laboratorist</option>
                  <option value="nurse">Nurse</option>
                  <option value="pharmacist">Pharmacist</option>
                  <option value="receptionist">Receptionist</option>
                  <option value="representative">Representative</option>
                  <option value="cash_manager">Cash Manager</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label" for="fullname">Full Name</label>
                <input type="text" className="form-control" id="fullname" name='name' placeholder="John Doe" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label" for="mobile">Mobile</label>
                <input type="text" className="form-control" id="mobile" placeholder="Mobile Number" />
              </div>
              
            </div>

            <div className="row">
            <div className="col-md-4 mb-3">
               {/* password filed */}
              <label className="form-label" for="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label" for="gender">Gender</label>
                <select name="gender" id="gender" className='form-control'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                {/* photo field */}
                <label className="form-label" for="photo">Photo</label>
                <input type="file" className="form-control" id="photo" placeholder="Photo" />
              </div>
            </div>

            <div className="row">
            </div>
            <div className="mb-3">
              <label className="form-label" for="address">Address</label>
              <textarea
                id="address"
                className="form-control"
                placeholder="Employee Address"
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
