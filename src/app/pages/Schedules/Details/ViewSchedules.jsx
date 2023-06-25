import React from 'react'
import { useState } from 'react';
import EditSchedules from './EditSchedules';

export default function ViewSchedules() {
    const [activeTab, setActiveTab] = useState('edit-schedules');
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
                id='edit-schedules'
                onClick={()=> setActiveTab('edit-schedules')}
              >
                Edit Schedules
              </button>
            </li>
          </ul>
        </div>
        {activeTab === 'edit-schedules' && <EditSchedules />}
      </>
    )
}
