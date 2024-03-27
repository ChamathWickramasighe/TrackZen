import React, { useState } from 'react';
import '../css/styles.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      setSignupError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setSignupError('Passwords do not match.');
      return;
    }

    // Code for signing up the user goes here
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      {signupError && <p className="error">{signupError}</p>}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
