import React from 'react'
import { Link } from 'react-router-dom'

const dashboardData = [

  {
    id: 2,
    name: "Today Appointments",
    total: 328,
    active: 234,
    inactive: 12,
    path: "/appointments"
  },
  {
    id: 1,
    name: "Total patients",
    total: 328,
    active: 234,
    inactive: 12,
    path: "/patients"
  },

  {
    id: 4,
    name: "Total Doctors",
    total: 28,
    active: 234,
    inactive: 12,
    path: "/doctors"
  },

]
export default function Dashboard() {
  return (
    <div className="row">
      {
        dashboardData.map((item, index) => (
          <div className="col-lg-4 col-md-3 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="card-title d-flex align-items-start justify-content-between">
                  <div className="avatar flex-shrink-0">
                    <img
                      src="../assets/img/icons/unicons/chart-success.png"
                      alt="chart success"
                      className="rounded"
                    />
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn p-0"
                      type="button"
                      id="cardOpt3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                      <Link to={item.path} className="dropdown-item">View More</Link>
                    </div>
                  </div>
                </div>
                <span className="fw-semibold d-block mb-1">{item.name}</span>
                <h3 className="card-title mb-2">{item.active}</h3>
                <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> -{item.inactive}</small>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
