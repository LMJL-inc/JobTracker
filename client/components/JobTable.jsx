import React from 'react';

export default function JobTable(props) {
  return (
    <section className="p-4">
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Company Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Status</th>
              <th scope="col">Date Applied</th>
              <th scope="col">Job Link</th>
              <th scope="col">Referral</th>
              <th scope="col">Notes</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Codesmith</td>
              <td>Resident</td>
              <td>Offer Received</td>
              <td>April 1 2022</td>
              <td>http://codesmith.io</td>
              <td />
              <td>3rd round</td>
              <td><button type="button" className="btn btn-info w-100 h-100">Update</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>a</td>
              <td>b</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
