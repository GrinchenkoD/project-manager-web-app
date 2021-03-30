import React from 'react';
import { Link } from 'react-router-dom';

export default function RegistrationPage() {
  return (
    <div>
      <Link to="/registration">Registration</Link>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <h2>Registration</h2>
    </div>
  );
}
