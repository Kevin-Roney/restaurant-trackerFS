import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setEmail, setToken, getUser }) {

  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  
  return (
    <div>AuthPage</div>
  );
}
