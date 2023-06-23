import React from 'react'

export default function IsExitsPatient({ setShow }) {
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
                                    <label className="form-label" for="phone">Mobile Number</label>
                                    <input type="text" className="form-control" id="phone" name='mobile' placeholder="Mobile Number" />
                                </div>
                            </div>
                        </form>
                        <button onClick={() => setShow(true)} className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
