import React from 'react';
import LoginPage from '../loginPage/LoginPage';
import RegisterPage from '../registrationPage/RegistrationPage';

export default function Authentification() {
  const toggle = true
  return (
    <main>
      {toggle ? <LoginPage /> :<RegisterPage />}
    </main>
  );
}
