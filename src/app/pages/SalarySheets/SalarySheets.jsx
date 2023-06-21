import React from 'react'

export default function SalarySheets() {
  return (
    <div className="card">
      <h5 className="card-header">Salary Sheets</h5>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Jakir Hasan</strong>
              </td>
              <td>018-1234567</td>
              <td>
                <td><span className="badge bg-label-success me-1">Paid</span></td>
              </td>
              <td><span className="badge bg-label-info me-1">12,000</span></td>
              <td>
                <div className="d-flex gap-2">
                  <button className='btn btn-primary btn-sm'>View</button>
                  <button className='btn btn-danger btn-sm'>Delete</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Ikbar Sarker</strong>
              </td>
              <td>01566-982016</td>
              <td>
                <td><span className="badge bg-label-success me-1">Paid</span></td>
              </td>
              <td><span className="badge bg-label-info me-1">14,000</span></td>
              <td>
                <div className="d-flex gap-2">
                  <button className='btn btn-primary btn-sm'>View</button>
                  <button className='btn btn-danger btn-sm'>Delete</button>

                </div>
              </td>
            </tr>
          </tbody>
          <tfoot className="table-border-bottom-0">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
