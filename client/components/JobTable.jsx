import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// const username = useSelector((state) => state.setUser.username);

const getJobs = async (status) => {
  try {
    const res = await fetch(`/api/jobs?username=luke&status=${status}`);
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
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState({});

  const renderJobs = (status) => {
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
            <td>
              <button
                type="button"
                id={job._id}
                className="btn btn-info w-100 h-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={(e) => {
                  console.log(data.filter((element) => element._id == e.target.id)[0]);
                  setCurrentJob(data.filter((element) => element._id == e.target.id)[0]);
                }}
              >
                Update
              </button>

            </td>
          </tr>
        )));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    renderJobs(status);
  }, [status]);

  const handleUpdate = () => {
    console.log(currentJob);
    fetch('/api/jobs/details', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(currentJob),
    })
      .then(() => renderJobs(status))
      .catch((err) => console.log(err));
    renderJobs(status);
  };

  const handleDelete = () => {
    console.log(currentJob);
    fetch('/api/jobs/deleteJob', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: currentJob._id }),
    })
      .then(() => renderJobs(status))
      .catch((err) => console.log(err));
  };

  console.log('rendered table');
  return (
    <section className="p-4">
      <div className="container">
        <h1>
          This page status is:
          {' '}
          {status}
        </h1>
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
            {jobs}
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Update Job Application</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="companyNameUpdate" className="col-form-label">Company Name:</label>
                  <input type="text" className="form-control" value={currentJob.companyName} onChange={(event) => setCurrentJob({ ...currentJob, companyName: event.target.value })} id="companyNameUpdate" />
                </div>
                <div className="mb-3">
                  <label htmlFor="jobTitleUpdate" className="col-form-label">Job Title:</label>
                  <input type="text" className="form-control" value={currentJob.jobTitle} onChange={(event) => setCurrentJob({ ...currentJob, jobTitle: event.target.value })} id="jobTitleUpdate" />
                </div>
                <div className="mb-3">
                  <label htmlFor="statusUpdate" className="col-form-label">Status:</label>
                  <input type="text" className="form-control" value={currentJob.status} onChange={(event) => setCurrentJob({ ...currentJob, status: event.target.value })} id="statusUpdate" />
                </div>
                <div className="mb-3">
                  <label htmlFor="dateAppliedUpdate" className="col-form-label">Date Applied:</label>
                  <input type="text" className="form-control" value={currentJob.dateApplied} onChange={(event) => setCurrentJob({ ...currentJob, dateApplied: event.target.value })} id="dateAppliedUpdate" />
                </div>
                <div className="mb-3">
                  <label htmlFor="linkToJobUpdate" className="col-form-label">Job Link:</label>
                  <input type="text" className="form-control" value={currentJob.linkToJob} onChange={(event) => setCurrentJob({ ...currentJob, linkToJob: event.target.value })} id="linkToJobUpdate" />
                </div>
                <div className="mb-3">
                  <label htmlFor="referralUpdate" className="col-form-label">Referral:</label>
                  <input type="text" className="form-control" value={currentJob.referral} onChange={(event) => setCurrentJob({ ...currentJob, referral: event.target.value })} id="referralUpdate" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">Notes:</label>
                  <textarea className="form-control" value={currentJob.notes} onChange={(event) => setCurrentJob({ ...currentJob, notes: event.target.value })} id="message-text" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handleDelete}>
                <i className="bi bi-trash3" />
                &nbsp;Delete
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdate}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
