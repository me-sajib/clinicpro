import React from 'react'
import { useState } from 'react';
import AllSchedules from './Tabs/AllSchedules';
import AddSchedule from './Tabs/AddSchedule';

export default function Schedules() {
    const [activeTab, setActiveTab ] = useState('all-schedules');
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
                            id='all-schedules'
                            onClick={() => setActiveTab('all-schedules')}
                        >
                            All Schedules
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
                            id='add-schedules'
                            onClick={() => setActiveTab('add-schedule')}
                        >
                            Add Schedule
                        </button>
                    </li>
                </ul>
            </div>
            {activeTab === "all-schedules" && <AllSchedules/>}
            {activeTab === "add-schedule" && <AddSchedule/>}
        </>
  )
}
