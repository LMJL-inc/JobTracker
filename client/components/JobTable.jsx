import React, { useState, useEffect } from 'react';

const getJobs = async (status) => {
  try {
    const res = await fetch(`/api/jobs?username=mario&status=${status}`);
    const resJson = await res.json();
    if (res.status === 200) {
      console.log(resJson);
      return resJson;
    }
    console.log('failed to get jobs.');
  } catch (err) {
    console.log(err);
  }
  return [];
};

export default function JobTable({ status }) {
  // props.status == applied

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobs(status)
      .then((data) => {
        setJobs(data.map((job, ind) => (
          <tr>
            <th scope="row">{ind + 1}</th>
            <td>{job.companyName}</td>
            <td>{job.jobTitle}</td>
            <td>{job.status}</td>
            <td>{job.dateApplied}</td>
            <td>{job.linkToJob}</td>
            <td>{job.referral}</td>
            <td>{job.notes}</td>
            <td><button type="button" className="btn btn-info w-100 h-100">Update</button></td>
          </tr>
        )));
      });
  }, []);
  console.log('rendered table');
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
            {jobs}
          </tbody>
        </table>
      </div>
    </section>
  );
}
