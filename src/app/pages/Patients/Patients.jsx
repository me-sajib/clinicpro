import React from 'react'

export default function Patients() {
    return (
        <div className="card">
            <h5 className="card-header">All Patients (04)</h5>
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
