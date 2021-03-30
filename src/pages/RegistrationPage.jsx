import React from 'react';
import Register from './registrationPage/RegistrationPage';
import AuthBackground from './registrationPage/AuthBackground';
import { Link } from 'react-router-dom';

export default function RegistrationPage() {
  return (
    <div>
      <Register />
      <div>
        <AuthBackground />
      </div>
    </div>
  );
}
