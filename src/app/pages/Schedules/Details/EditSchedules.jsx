import React from 'react'

export default function EditSchedules() {
    return (
        <div className="row">
            <div className="col-xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Edit Schedule</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" for="doctors">Doctor Name</label>
                                    <select name="doctor" id="doctors" className='form-control'>
                                        <option value="sajib">Sajib</option>
                                        <option value="jahid">Jahid</option>
                                        <option value="raju">Raju</option>
                                        <option value="faruk">Faruk</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" for="date">Available Date</label>
                                    <select name="date" id="date" className='form-control'>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                    </select>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="starttime" className="form-label">Start Time</label>
                                    <input type="time" className="form-control" id="starttime" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="endtime" className="form-label">End Time</label>
                                    <input type="time" className="form-control" id="endtime" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="status" className="form-label">Status</label>
                                    <select name="status" id="status" className='form-control'>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
