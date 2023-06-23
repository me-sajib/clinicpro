import React from 'react'
import { useState } from 'react'
import AllPatients from './Tabs/AllPatients'
import IsExitsPatient from './Tabs/IsExitsPatient'
import AddPatient from './Tabs/AddPatient';
import AddDocument from './Tabs/AddDocument';
import AllDocuments from './Tabs/AllDocuments';

export default function Patients() {
    const [activeTab, setActiveTab ] = useState('all-patients');
    const [showForm, setShow] = useState(false);

    return (
        <>
            <div className="nav-align-top mb-4">
                <ul className="nav nav-pills mb-3" role="tablist">
                    <li className="nav-item">
                        <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-home"
                            aria-controls="navs-pills-top-home"
                            aria-selected="true"
                            id='all-patients'
                            onClick={() => setActiveTab('all-patients')}
                        >
                            All Patients
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-profile"
                            aria-controls="navs-pills-top-profile"
                            aria-selected="false"
                            id='add-patient'
                            onClick={() => setActiveTab('add-patient')}
                        >
                            Add Patient
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-profile"
                            aria-controls="navs-pills-top-profile"
                            aria-selected="false"
                            id='all-document'
                            onClick={() => setActiveTab('all-document')}
                        >
                            All Document
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-pills-top-profile"
                            aria-controls="navs-pills-top-profile"
                            aria-selected="false"
                            id='add-document'
                            onClick={() => setActiveTab('add-document')}
                        >
                            Add Document
                        </button>
                    </li>
                </ul>
            </div>
            {activeTab === 'all-patients' && <AllPatients />}
            {activeTab === 'add-patient' &&  ( showForm ? <AddPatient/> :  <IsExitsPatient setShow={setShow} />)}
            {activeTab === "all-document" && <AllDocuments/>}
            {activeTab === "add-document" && <AddDocument/>}
        </>
    )
}
