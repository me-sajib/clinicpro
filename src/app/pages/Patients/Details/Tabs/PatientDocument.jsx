import React from 'react'
import { Link } from "react-router-dom"

export default function PatientDocument() {
    return (
        <div className="card">
            {/* table heading */}
            <div className="d-md-flex justify-content-between align-items-center p-3">
                <div className="d-md-flex align-items-center gap-3">
                    <h5 className="table-header-title">All Document (4)</h5>
                    <div className='py-3'>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-info dropdown-toggle btn-sm"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                All Document
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#s">All Documents</a></li>
                                <li><a className="dropdown-item" href="#s">Today's Documents</a></li>
                                <li><a className="dropdown-item" href="#s">Active Documents</a></li>
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
                            <th>Patient ID</th>
                            <th>Doctor Name</th>
                            <th>Prescription</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>#493</strong>
                            </td>
                            <td>Debashis Devnath</td>
                            <td>
                                <img src="/assets/img/avatars/6.png" alt="document of patient" width="30" height="30" />
                            </td>
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
                                <strong>#493</strong>
                            </td>
                            <td>Debashis Devnath</td>
                            <td>
                                Demo test
                            </td>
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
                                <strong>#493</strong>
                            </td>
                            <td>Debashis Devnath</td>
                            <td>
                            <img src="/assets/img/avatars/6.png" alt=" document of patient" width="30" height="30" />
                            </td>
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
                                <strong>#493</strong>
                            </td>
                            <td>Debashis Devnath</td>
                            <td>
                            <img src="/assets/img/avatars/7.png" alt=" document of patient" width="30" height="30" />
                            </td>
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
                                <strong>#493</strong>
                            </td>
                            <td>Debashis Devnath</td>
                            <td>
                              <img src="/assets/img/avatars/1.png" alt=" document of patient" width="30" height="30" />
                            </td>
                            <td>
                                <td><span className="badge bg-label-info me-1">12-02-2023</span></td>
                            </td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Link to="/assets/img/avatars/7.png" target='_blank' rel="noreferrer" className='btn btn-primary btn-sm'>View</Link>
                                    <button className='btn btn-danger btn-sm'>Delete</button>

                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                    <tfoot className="table-border-bottom-0">
                        <tr>
                        <th>Patient ID</th>
                            <th>Doctor Name</th>
                            <th>Prescription</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
