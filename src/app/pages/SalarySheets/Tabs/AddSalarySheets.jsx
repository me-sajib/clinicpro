import React from 'react'

export default function AddSalarySheets() {
    return (
        <div className="row">
            <div className="col-xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Payments</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" for="role">Select Employee</label>
                                    <select name="role" id="role" className='form-control'>
                                        <option value="admin">Hamid</option>
                                        <option value="admin">sajib</option>
                                        <option value="admin">jamil</option>
                                        <option value="admin">khalim</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="mobile">Mobile</label>
                                    <input type="number" className="form-control" name='phone' id="mobile" placeholder="01*********" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="amount">Amount</label>
                                    <input type="text" className="form-control" name='amount' id="amount" placeholder="Payment Amount"/>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="status">Status</label>
                                    <select name="status" id="status" className='form-control'>
                                        <option value="Pending">Pending</option>
                                        <option value="paid">Paid</option>
                                        <option value="un-paid">UnPaid</option>
                                    </select>
                                </div>

                            </div>

                            <div className="row">
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="comment">Comments</label>
                                <textarea
                                    id="comment"
                                    className="form-control"
                                    placeholder="Any comments?"
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
