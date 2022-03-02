/* eslint-disable react/jsx-filename-extension */
import React, { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h1><Link to="/todolist/">Things To Do!</Link></h1>
      <div className="links">
        <Link to="/todolist/users/signup">Sign Up</Link>
        <Link to="/todolist/users/login">Log In</Link>
      </div>
    </div>
  );
}

export default Navbar;
