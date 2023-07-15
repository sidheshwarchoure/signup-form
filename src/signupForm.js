import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors([]);

    // Validate form fields
    const newErrors = [];
    if (email === '') {
      newErrors.push('Email field is required.');
    }
    if (name === '') {
      newErrors.push('Full Name field is required.');
    }
    if (password === '') {
      newErrors.push('Password field is required.');
    }
    if (confirmPassword === '') {
      newErrors.push('Confirm Password field is required.');
    }
    if (password !== confirmPassword) {
      newErrors.push('Passwords do not match.');
    }

    // Update errors state
    setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
        <input
          type="text"
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div>
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Create Account</button>
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SignupForm;
