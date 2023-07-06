import React, { useState } from 'react'
import AllSalarySheets from './Tabs/AllSalarySheets'
import AddSalarySheets from './Tabs/AddSalarySheets'

export default function SalarySheets() {
  const [activeTab, setActiveTab] = useState("all-sheets")
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
              id='all-sheets'
              onClick={() => setActiveTab('all-sheets')}
            >
              Salary Sheets
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
              id='add-sheets'
              onClick={() => setActiveTab('add-sheets')}
            >
              Add Salary
            </button>
          </li>
        </ul>
      </div>
      {/* active wise show components */}
      {activeTab === "all-sheets" && <AllSalarySheets/>}
      {activeTab === "add-sheets" && <AddSalarySheets/>}
    </>
  )
}
