import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { add_doctor } from '../../../../redux/doctors/actions/doctorActions';

export default function AddDoctor() {
  const dispatch = useDispatch();

  /**
   * handles form submit
   * @param {*} e event on form submit
   */
  const handleAddDoctor = (e) => {
    // prevent default
    e.preventDefault();

    // get form data
    const name = e.target.name.value;
    const specialist = e.target.specialist.value;
    const degree = e.target.degree.value;
    const mobile = e.target.mobile.value;
    const mobile2 = e.target.mobile.value;
    const gender = e.target.gender.value;
    const age = e.target.age.value;
    const address = e.target.address.value;
    const status = e.target.status.value;

    // set form data
    const formData = {
      id: Math.random().toString(36).substring(2),
      name,
      specialist,
      degree,
      mobile,
      mobile2,
      gender,
      age,
      address,
      status
    };

    dispatch(add_doctor(formData));
    // show success message
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Doctor Added',
      showConfirmButton: false,
      timer: 2000
    })

    // reset html form
    e.target.reset();
  }

  return (
    <div className="row">
      <div className="col-xl">
        <form onSubmit={handleAddDoctor}>
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Add Doctor</h5>
            </div>
            <div className="card-body">

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label" htmlFor="fullname">Full Name</label>
                  <input type="text" className="form-control" id="fullname" name='name' placeholder="John Doe" required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label" htmlFor="specialist">Specialist</label>
                  <input type="text" className="form-control" id="specialist" name='specialist' placeholder="Cardiologist" required />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label" htmlFor="degree">Degree</label>
                  <input type="text" className="form-control" id="degree" name='degree' placeholder="M.B.B.S, M.S" required />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="gender">Gender</label>
                  <select name="gender" id="gender" className='form-control' required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="age">Age</label>
                  <input type="text" className="form-control" id="age" name='age' placeholder="26" />

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="phone">Mobile Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="mobile"
                    className="form-control phone-mask"
                    placeholder="01XX-XXXXXXX"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="status" className="form-label">Status</label>
                  <select name="status" id="status" className='form-control'>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="out_of_clinic">Out of Clinic</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" for="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder="Doctor Address"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
