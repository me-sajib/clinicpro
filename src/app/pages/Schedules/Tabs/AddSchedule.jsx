import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function AddSchedule() {
    const [dataSubmit, setDataSubmit] = useState(false);
    const [formData, setFormData] = useState([]);

    const handleAddSchedule = e => {
        e.preventDefault();
        const {doctor, date, time1, time2, status} = e.target;
        // check all data are not empty
        if(!doctor.value || !date.value || !time1.value || !time2.value || !status.value){
            setDataSubmit(false);
            return;
        }else{
            setFormData({doctor_name: doctor.value, date: date.value, time1: time1.value, time2: time2.value, status: status.value});
            setDataSubmit(true);
        }
    }

    useEffect(() => {
        if(dataSubmit){
            fetch("http://localhost:3300/schedules/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then(res => res.json())
            .then(data => {
                if(data.status){
                    Swal.fire({
                        icon: 'success',
                        title: "Schedule Added Successfully",
                        showConfirmButton: true,
                    })
                }
                setDataSubmit(false)
            })
        }
      
    },[dataSubmit])

    return (
        <div className="row">
            <div className="col-xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Add Schedule</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleAddSchedule}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="doctors">Doctor Name</label>
                                    <select name="doctor" id="doctors" className='form-control'>
                                        <option value="sajib">Sajib</option>
                                        <option value="jahid">Jahid</option>
                                        <option value="raju">Raju</option>
                                        <option value="faruk">Faruk</option>
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="date">Available Date</label>
                                    <select name="date" id="date" className='form-control'>
                                        <option value="saturday">Saturday</option>
                                        <option value="sunday">Sunday</option>
                                        <option value="monday">Monday</option>
                                        <option value="tuesday">Tuesday</option>
                                        <option value="wednesday">Wednesday</option>
                                        <option value="thursday">Thursday</option>
                                        <option value="friday">Friday</option>
                                    </select>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlhtmlFor="starttime" className="form-label">Start Time</label>
                                    <input type="time" name="time1" className="form-control" id="starttime" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlhtmlFor="endtime" className="form-label">End Time</label>
                                    <input type="time" name="time2" className="form-control" id="endtime" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlhtmlFor="status" className="form-label">Status</label>
                                    <select name="status" id="status" className='form-control'>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
