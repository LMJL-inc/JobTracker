import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/userSlice';

export default function Header({ session }) {
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Application Tracker</a>
        {session && (
        <div className="d-flex" role="button">
          <Link to="/add" className="btn btn-outline-success m-1" type="submit">Add New Job</Link>
          <Link className="btn btn-outline-danger m-1" type="submit" to="/" onClick={dispatch(setUsername('you are not logged in'))}>Logout</Link>
        </div>
        )}
      </div>
    </nav>
  );
}
