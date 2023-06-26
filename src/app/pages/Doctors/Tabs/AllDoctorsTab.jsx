import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { filtering_doctor, search_doctors } from '../../../../redux/doctors/actions/doctorActions';

export default function AllDoctorsTab() {
    const {doctors} = useSelector(state => state);
    const dispatch = useDispatch();
    const [allDoctors, setDoctors] = useState(doctors);
    
    useEffect(()=>{
        setDoctors(doctors)
    },[doctors])
    /**
     * handles filtering
     * @param {*} e event on filter selection option
     * @returns void
     */
    // const handleFiltering = (e) => {
    //     if (e.target.value === "all") {
    //         setDoctors(doctors);
    //         return;
    //     }
    //     const filteredDoctors = doctors.filter(doctor => doctor.status === e.target.value);
    //     setDoctors(filteredDoctors);
    // }

    /**
     * searching all of mobile number, name, status and degree
     * @param {*} e event on search input
     * @returns void
     */

    // const handleSearching = (e) => {
    //     const filteredDoctors = doctors.filter(doctor => {
    //         return doctor.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //             doctor.phone.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //             doctor.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //             doctor.degree.toLowerCase().includes(e.target.value.toLowerCase());
    //     })
    //     setDoctors(filteredDoctors);
    // }

    /**
     * handles delete a doctor and show a sweet alert for confirmation and deletion
     * @param {*} id doctor id
     * @returns void
     */

    const handleDeleteDoctor = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(data => {
                if (data.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    setDoctors(doctors.filter(doctor => doctor.id !== id));
                }
            })
    }

    return (
        <div className="card">
            {/* doctors table headings */}
            <div className="d-md-flex justify-content-between align-items-center p-3">
                <div className="d-md-flex align-items-center gap-3">
                    <h5 className="table-header-title">All Doctors ({allDoctors.length})</h5>
                    <div className='py-3'>
                        <select name="filtering" onChange={(e) => dispatch(filtering_doctor(e.target.value)) } id="filtering" className='form-control'>
                            <option value="all">All</option>
                            <option value="active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="out_of_clinic">Out of Clinic</option>
                        </select>
                    </div>

                </div>
                {/* search box */}
                <div>
                    <form className="d-flex">
                        <div className="input-group">
                            <span className="input-group-text"><i className="tf-icons bx bx-search"></i></span>
                            <input name="search" id="search" onChange={(e)=> dispatch(search_doctors(e.target.value))} type="text" className="form-control" placeholder="Search..." />
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
                        {
                            allDoctors.map((doctor, index) => <tr key={index}>
                                <td>{doctor.name}</td>
                                <td>{doctor.mobile}</td>
                                <td>{doctor.status === "active" ? <span className="badge bg-label-success me-1">Active</span> : <span className="badge bg-label-danger me-1">Inactive</span>}</td>
                                <td>{doctor.degree}</td>
                                <td>
                                    <Link to={`/doctors/${doctor.id}`} className='btn btn-primary btn-sm mx-2'>View</Link>
                                    <button className='btn btn-danger btn-sm' onClick={() => handleDeleteDoctor(doctor.id)}>Delete</button>
                                </td>
                            </tr>)
                        }
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
