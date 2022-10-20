import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/userSlice';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // handle login/ handle signup. BODY: document.getElementById("password")
  const handleSignup = () => {
    const credentials = { username: document.querySelector('#username').value, password: document.querySelector('#password').value };
    fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          dispatch(setUsername(document.querySelector('#username').value));
          return navigate('/add');
        }
        return setErrorMessage('Invalid username of password');
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = () => {
    const credentials = { username: document.querySelector('#username').value, password: document.querySelector('#password').value };
    fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          dispatch(setUsername(document.querySelector('#username').value));
          return navigate('/add');
        }
        return setErrorMessage('Invalid username of password');
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="p-3 col-5 container">
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" id="username" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="text" id="password" className="form-control" />
      </div>
      {errorMessage}
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3 me-1" onClick={handleLogin}>Login</button>
        <button type="submit" className="btn btn-primary mb-3 me-1" onClick={handleSignup}>Signup</button>
      </div>
    </section>
  );
}

export default Login;
