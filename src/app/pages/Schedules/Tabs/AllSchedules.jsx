import React from 'react';
import { Link } from "react-router-dom";

export default function AllSchedules() {
    return (
        <div className="card">
            {/* table heading */}
            <div className="d-md-flex justify-content-between align-items-center p-3">
                <div className="mb-3">
                    <h5 className="table-header-title">All Schedules (03)</h5>
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
                            <th>Doctor Name</th>
                            <th>Designation</th>
                            <th>Day</th>
                            <th>Times</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Wyazed Islam</strong>
                            </td>
                            <td>Ortho Predik</td>
                            <td>
                                <td><span className="badge bg-label-info me-1">Monday</span></td>
                            </td>
                            <td>
                                <td>04:00PM - 06:00PM</td>
                            </td>
                            <td>
                                <td><span className="badge bg-label-success me-1">Active</span></td>
                            </td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Link to="/schedules/2" className='btn btn-primary btn-sm'>Edit</Link>
                                    <button className='btn btn-danger btn-sm'>Delete</button>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Limon Islam</strong>
                            </td>
                            <td>Dental</td>
                            <td>
                                <td><span className="badge bg-label-info me-1">Monday</span></td>
                            </td>
                            <td>
                                <td>04:00PM - 06:00PM</td>
                            </td>
                            <td>
                                <td><span className="badge bg-label-success me-1">Active</span></td>
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
                            <td>Dental</td>
                            <td>
                                <td><span className="badge bg-label-info me-1">Monday</span></td>
                            </td>
                            <td>
                                <td>04:00PM - 06:00PM</td>
                            </td>
                            <td>
                                <td><span className="badge bg-label-success me-1">Active</span></td>
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
                            <th>Doctor Name</th>
                            <th>Designation</th>
                            <th>Day</th>
                            <th>Times</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
