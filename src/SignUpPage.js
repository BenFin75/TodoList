/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const confirmPassword = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to send user info would go here
  };

  return (
    <div className="signup">
      <h1>Sign up! (Not real)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Confirm password!:
          <input
            type="text"
            required
            value={confirmPassword}
          />
        </label>
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUpPage;
