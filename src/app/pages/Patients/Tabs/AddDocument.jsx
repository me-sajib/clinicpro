import React from 'react'

export default function AddDocument() {
    return (
        <div className="row">
            <div className="col-xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Add Patient Document</h5>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-2 mb-3">
                                    <label className="form-label" for="id">Patient ID</label>
                                    <input type="text" className="form-control" id="id" name='pid' placeholder="Patient ID" />
                                </div>
                                <div className="col-md-4 mb-3">
                                <label className="form-label" for="doctors">Doctor Name</label>
                                    <select name="doctor" id="doctors" className='form-control'>
                                        <option value="sajib">Sajib</option>
                                        <option value="jahid">Jahid</option>
                                        <option value="raju">Raju</option>
                                        <option value="faruk">Faruk</option>
                                    </select>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    {/* attach file */}
                                    <label htmlFor="file">Attach File</label>
                                    <input type="file" id="file" name="file" className='form-control' />
                                </div>
                            </div>

                            <div className="row">
                            </div>
                            <div className="mb-3">
                                <label className="form-label" for="desc">Description</label>
                                <textarea
                                    id="desc"
                                    className="form-control"
                                    placeholder="Document Description"
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
