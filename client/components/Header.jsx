import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ session }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Job Tracker</a>
        {session && (
        <div className="d-flex" role="button">
          <Link to="/add" className="btn btn-outline-success m-1" type="submit">Add New Job</Link>
          <button className="btn btn-outline-danger m-1" type="submit">Logout</button>
        </div>
        )}
      </div>
    </nav>
  );
}
