import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function AllSchedules() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3300/schedules/all")
            .then(res => res.json())
            .then(items => setData(items.data))
    }, [])


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
                        {
                           data?.length > 0 && data?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.doctor_name}</td>
                                        <td>{item?.designation}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time1} - {item.time2}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <Link to="/schedules/2" className='btn btn-primary btn-sm'>Edit</Link>
                                                <button className='btn btn-danger btn-sm'>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

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
