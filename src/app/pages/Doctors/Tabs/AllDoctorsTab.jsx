import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

const doctors = [
    {
        id: 1,
        name: "Golap Khan",
        phone: "0181234567",
        degree: "MBBS",
        specialist: "Dermatology",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "Active",
        address: "Mohammadpur, Dhaka",
        age: "23",
        gender: "Male",
        patients: "10"
    },
    {
        id: 2,
        name: "Jahid Alam",
        phone: "0185334565",
        degree: "MBBS, HDJS",
        specialist: "Dermatology",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "Active",
        address: "Dhanmondi, Dhaka",
        age: "25",
        gender: "Male",
        patients: "13"
    },
    {
        id: 3,
        name: "Hamid Islam",
        phone: "0185333265",
        degree: "MBBS, MCDBS",
        specialist: "Cardiology",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "Inactive",
        address: "Basundhara, Dhaka",
        age: "28",
        gender: "Male",
        patients: "30"
    },
    {
        id: 4,
        name: "Rakib Khan",
        phone: "0185334565",
        degree: "MBBS, HDJS",
        specialist: "Dermatology",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "out_of_clinic",
        address: "Dhanmondi, Dhaka",
        age: "25",
        gender: "Male",
        patients: "13"
    }
]
export default function AllDoctorsTab() {
    const [allDoctors, setDoctors] = useState(doctors);

    /**
     * handles filtering
     * @param {*} e event on filter selection option
     * @returns void
     */
    const handleFiltering = (e) => {
        if (e.target.value === "all") {
            setDoctors(doctors);
            return;
        }
        const filteredDoctors = doctors.filter(doctor => doctor.status === e.target.value);
        setDoctors(filteredDoctors);
    }

    /**
     * searching all of mobile number, name, status and degree
     * @param {*} e event on search input
     * @returns void
     */

    const handleSearching = (e) => {
        const filteredDoctors = doctors.filter(doctor => {
            return doctor.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                doctor.phone.toLowerCase().includes(e.target.value.toLowerCase()) ||
                doctor.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
                doctor.degree.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setDoctors(filteredDoctors);
    }

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
                        <select name="filtering" onChange={handleFiltering} id="filtering" className='form-control'>
                            <option value="all">All</option>
                            <option value="Active">Active</option>
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
                            <input name="search" id="search" onChange={handleSearching} type="text" className="form-control" placeholder="Search..." />
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
                                <td>{doctor.phone}</td>
                                <td>{doctor.status === "Active" ? <span className="badge bg-label-success me-1">Active</span> : <span className="badge bg-label-danger me-1">Inactive</span>}</td>
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
