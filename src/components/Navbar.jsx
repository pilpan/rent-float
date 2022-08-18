import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ authState, setAuthState }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/login/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };

  return (

    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">RENT APPARTMENT</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="bg-secondary.bg-gradient">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
          </ul>

          {!authState
            ? (
              <>
                <NavLink to="/signup" className="btn btn-success m-2"><strong>Sign Up</strong></NavLink>
                <NavLink to="/login" className="btn btn-outline-success m-2">Login</NavLink>
              </>
            ) : (
              <>
                <NavLink to={`/favorite/${authState.id}`} className="btn btn-success m-2"><strong>favorite</strong></NavLink>
                <a onClick={logoutHandler} className="btn btn-logout-success m-2" href="logout">Logout</a>
              </>
            )}
        </div>
      </div>
    </nav>
  );
}
