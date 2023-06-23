import React from 'react'

export default function AllPatients() {
    return (
        <div className="card">
        {/* table heading */}
        <div className="d-md-flex justify-content-between align-items-center p-3">
                <div className="d-md-flex align-items-center gap-3">
                    <h5 className="table-header-title">All Patients (04)</h5>
                    <div className='py-3'>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-info dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All Patients
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#s">All Patients</a></li>
                                <li><a className="dropdown-item" href="#s">Today's Patients</a></li>
                                <li><a className="dropdown-item" href="#s">Active Patients</a></li>
                                <li><a className="dropdown-item" href="#s">De-Active Doctors</a></li>
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
                        <th>Last Visit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Limon Islam</strong>
                        </td>
                        <td>013-3412567</td>
                        <td>
                            <td><span className="badge bg-label-info me-1">12-02-2023</span></td>
                        </td>
                        <td>
                            <div className="d-flex gap-2">
                                <button className='btn btn-primary btn-sm'>View</button>
                                <button className='btn btn-danger btn-sm'>Delete</button>
        
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Jakir Sarker</strong>
                        </td>
                        <td>017-9237347</td>
                        <td>
                            <td><span className="badge bg-label-info me-1">04-12-2022</span></td>
                        </td>
                        <td>
                            <div className="d-flex gap-2">
                                <button className='btn btn-primary btn-sm'>View</button>
                                <button className='btn btn-danger btn-sm'>Delete</button>
        
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Raju Miah</strong>
                        </td>
                        <td>015-93093223</td>
                        <td>
                            <td><span className="badge bg-label-info me-1">24-05-2023</span></td>
                        </td>
                        <td>
                            <div className="d-flex gap-2">
                                <button className='btn btn-primary btn-sm'>View</button>
                                <button className='btn btn-danger btn-sm'>Delete</button>
        
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>Limon Islam</strong>
                        </td>
                        <td>013-3412567</td>
                        <td>
                            <td><span className="badge bg-label-info me-1">12-02-2023</span></td>
                        </td>
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
                        <th>Last Visit</th>
                        <th>Actions</th>
                    </tr>
                </tfoot>
            </table>
        </div>
        </div>
    )
}
