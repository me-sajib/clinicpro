import React from 'react'

export default function Doctors() {
  return (
    <div className="card">
      <h5 className="card-header">All Doctors (02)</h5>
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
            <tr>
              <td>
                <strong>Hamid Khan</strong>
              </td>
              <td>018-1234567</td>
              <td>
                <td><span className="badge bg-label-warning me-1">De-active</span></td>
              </td>
              <td><span className="badge bg-label-info me-1">LMSC, DKKS</span></td>
              <td>
                <div className="d-flex gap-2">
                  <button className='btn btn-primary btn-sm'>View</button>
                  <button className='btn btn-danger btn-sm'>Delete</button>

                </div>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Debashish Sarker</strong>
              </td>
              <td>01722-982016</td>
              <td>
                <td><span className="badge bg-label-success me-1">Active</span></td>
              </td>
              <td><span className="badge bg-label-info me-1">MBBS</span></td>
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
              <th>Degree</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
