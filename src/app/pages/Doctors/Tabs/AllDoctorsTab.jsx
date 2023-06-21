import React from 'react'

export default function AllDoctorsTab() {
    return (
        <div className="card">
            {/* doctors table headings */}
            <div className="d-md-flex justify-content-between align-items-center p-3">
                <div className="d-md-flex align-items-center gap-3">
                    <h5 className="table-header-title">All Doctors (02)</h5>
                    <div className='py-3'>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-info dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All Doctors
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#s">All Doctors</a></li>
                                <li><a className="dropdown-item" href="#s">Active Doctors</a></li>
                                <li><a className="dropdown-item" href="#s">De-Active Doctors</a></li>
                                <li><a className="dropdown-item" href="#s">Out of Clinic Doctors</a></li>

                            </ul>
                        </div>
                    </div>

                </div>
                {/* search box */}
                <div>
                    <form className="d-flex">
                        <div className="input-group">
                            <span className="input-group-text"><i className="tf-icons bx bx-search"></i></span>
                            <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                    </form>
                </div>
            </div>

            <div className="table-responsive text-nowrap">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Degree</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Hamid Khan</strong>
                            </td>
                            <td>018-1234567</td>
                            <td>
                                <td><span className="badge bg-label-warning me-1">De-active</span></td>
                            </td>
                            <td><span className="badge bg-label-info me-1">LMSC, DKKS</span></td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button className='btn btn-primary btn-sm'>View</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Debashish Sarker</strong>
                            </td>
                            <td>01722-982016</td>
                            <td>
                                <td><span className="badge bg-label-success me-1">Active</span></td>
                            </td>
                            <td><span className="badge bg-label-info me-1">MBBS</span></td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button className='btn btn-primary btn-sm'>View</button>
                                    <button className='btn btn-danger btn-sm'>Delete</button>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot className="table-border-bottom-0">
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Degree</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
