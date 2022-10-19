/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function StatusContainer(status) {
  console.log('status container rendered');
  const [statusNum, setStatusNum] = useState({
    applied: 0,
    interviewing: 0,
    denied: 0,
    offered: 0,
  });

  const username = useSelector((state) => state.setUser.username);

  useEffect(() => {
    const obj = {
      applied: 0,
      interviewing: 0,
      denied: 0,
      offered: 0,
    };
    fetch(`/api/jobs/user?username=${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // eslint-disable-next-line no-restricted-syntax
        for (const job of data) {
          if (job.status === 'applied') obj.applied++;
          if (job.status === 'interviewing') obj.interviewing++;
          if (job.status === 'denied') obj.denied++;
          if (job.status === 'offered') obj.offered++;
        }
        setStatusNum(obj);
      })
      .catch((err) => console.log(err));
  }, [status]);
  console.log(statusNum);
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
            <Link to="/applied" type="button" className="btn btn-primary w-100 h-100">
              Applied:
              {' '}
              {statusNum.applied}
            </Link>
            <Link to="/interviewing" type="button" className="btn btn-warning w-100 h-100">
              Interviewing:
              {' '}
              {statusNum.interviewing}
            </Link>
            <Link to="/denied" type="button" className="btn btn-danger w-100 h-100">
              Denied:
              {' '}
              {statusNum.denied}
            </Link>
            <Link to="/offers" type="button" className="btn btn-success w-100 h-100">
              Offers:
              {' '}
              {statusNum.offered}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
