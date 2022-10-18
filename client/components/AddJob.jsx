import React from 'react';

export default function AddJob(props) {
  return (
    // a form
    <section className="p-3 col-5 container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Company Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Job Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Date applied</label>
        <input type="text" className="form-control " id="calendar" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Link to Job</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Referral</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Notes</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Save Job</button>
      </div>
    </section>
  );
}
