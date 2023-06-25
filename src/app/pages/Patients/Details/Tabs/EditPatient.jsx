import React from 'react'
export default function EditPatient() {
    return (
        <div className="row">
            <div className="col-xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Add Patient</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" for="fullname">Full Name</label>
                                    <input type="text" className="form-control" value={"Limon Islam"} id="fullname" name='name' placeholder="John Doe" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" for="mobile">Mobile</label>
                                    <input type="text" className="form-control" id="mobile" value={"01712345678"} placeholder="Mobile Number" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" for="phone">Phone</label>
                                    <input type="text" className="form-control" value={"01712345678"} id="phone" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" for="blood">Blood Group</label>
                                    <select name="blood" id="blood" value={"a+"} className='form-control'>
                                        <option value="a+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="b+">B+</option>
                                        <option value="b-">B-</option>
                                        <option value="b+">O+</option>
                                        <option value="o-">O-</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" for="gender">Gender</label>
                                    <select name="gender" id="gender" value={"male"} className='form-control'>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label" for="age">Age</label>
                                    <input type="text" className="form-control" value={"22"} id="age" placeholder="26" />
                                </div>
                            </div>

                            <div className="row">
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="address">Address</label>
                                <textarea
                                    id="address"
                                    value={"Lalbag, Rangpur"}
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
