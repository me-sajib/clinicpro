import React, { useState } from 'react'
import AllEmployee from './Tabs/AllEmployee';
import AddEmployee from './Tabs/AddEmployee';

export default function Employee() {
  const [activeTab, setActiveTab] = useState('all-employee');
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
              id='all-employee'
              onClick={() => setActiveTab('all-employee')}
            >
              All Employee
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
              id='add-employee'
              onClick={() => setActiveTab('add-employee')}
            >
              Add Employee
            </button>
          </li>
        </ul>
      </div>
      {activeTab === "all-employee" && <AllEmployee />}
      {activeTab === "add-employee" && <AddEmployee />}
    </>
  )
}
