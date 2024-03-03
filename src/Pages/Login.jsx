import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProfessor, setIsProfessor] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsProfessor(!isProfessor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="check">
          <label htmlFor="professorCheckbox">
            Professor? 
          </label>
          <input
            id="professorCheckbox"
            type="checkbox"
            checked={isProfessor}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="links">
          {/* <a href="#">Forgot Password?</a> */}
          <Link to="/register">Register</Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
