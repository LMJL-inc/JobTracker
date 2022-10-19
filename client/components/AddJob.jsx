import React, { useState } from 'react';

export default function AddJob(props) {
  const defaultValues = {
    username: 'luke',
    companyName: '',
    jobTitle: '',
    dateApplied: '',
    linkToJob: '',
    referral: '',
    notes: '',
  };
  const [values, setValues] = useState(defaultValues);
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resJson = await res.json();
      if (res.status === 200) {
        setValues(defaultValues);
        console.log('User created successfully');
      } else {
        console.log('Some error occured');
      }
    } catch (err) {
      console.log(err); // backend server is down
    }
  };
  return (
    // a form
    <section className="px-3 col-5 container">
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label">Company Name</label>
        <input type="text" id="companyName" className="form-control" value={values.companyName} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Job Title</label>
        <input type="text" id="jobTitle" className="form-control" value={values.jobTitle} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Date applied</label>
        <input type="text" id="dateApplied" className="form-control " value={values.dateApplied} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Link to Job</label>
        <input type="text" id="linkToJob" className="form-control" value={values.linkToJob} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Referral</label>
        <input type="text" id="referral" className="form-control" value={values.referral} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Notes</label>
        <textarea className="form-control" id="notes" value={values.notes} rows="3" onChange={handleChange} />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmit}>Save Job</button>
      </div>
    </section>
  );
}
