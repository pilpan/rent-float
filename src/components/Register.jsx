import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ setAuthState }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/');
    }
  };
  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="row justify-content-center">
      <div className="col-5">
        <form onSubmit={submitHandler}>

          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Email</label>
            <input
              value={input.email}
              onChange={changeHandler}
              type="email"
              name="email"
              className="form-control"
              id="signupName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input
              value={input.password}
              onChange={changeHandler}
              type="password"
              name="password"
              className="form-control"
              id="signupPassword"
            />
          </div>
          <div className="row justify-content-center">
            <button type="submit" className="btn btn-outline-success">Sign up</button>
            {error && <div style={{ color: 'red' }}>This nickname already exists</div>}
          </div>
        </form>
      </div>
    </div>
  );
}
