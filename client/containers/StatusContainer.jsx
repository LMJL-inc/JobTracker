import React from 'react';
import { Link } from 'react-router-dom';

export default function StatusContainer(props) {
  return (
    <section className="p-4">
      {/*
      multi-select version of the buttons
      <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
        <label className="btn btn-outline-primary w-100" htmlFor="btncheck1">Applied: 0</label>

        <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
        <label className="btn btn-outline-warning active" htmlFor="btncheck2">Checkbox 2</label>

        <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
      </div> */}
      <div className="container " id="status-container">
        <div className="row justify-content-center py-600">
          <div className="col-10 btn-group">
            <Link to="/applied" type="button" className="btn btn-primary w-100 h-100">Applied: 0</Link>
            <Link to="/interviewing" type="button" className="btn btn-warning w-100 h-100">Interviewing: 0</Link>
            <Link to="/denied" type="button" className="btn btn-danger w-100 h-100">Denied: 0</Link>
            <Link to="/offers" type="button" className="btn btn-success w-100 h-100">Offers: 0</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
