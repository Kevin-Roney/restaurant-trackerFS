import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({ setEmail, setToken, getUser }) {

  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();
    await signUp(formEmail, formPassword);
    const user = await getUser();
    setEmail(user.user.email);
    setToken(user.access_token);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    await signIn(formEmail, formPassword);
    const user = getUser();
    setEmail(user.email);
    setToken(user.access_token);
  }

  return (
    <div className='auth'>
      <h1>Restaurant Tracker</h1>
      <form onSubmit={handleSignUp}>
        <label>
                Email
          <input required type="email" name="email" onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label>
                Password
          <input required type="password" name="password" onChange={e => setFormPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <label>
                Email
          <input required type="email" name="email" onChange={e => setFormEmail(e.target.value)}/>
        </label>
        <label>
                Password
          <input required type="password" name="password" onChange={e => setFormPassword(e.target.value)}/>
        </label>
        <button>Sign in</button>
      </form>
    </div>
  );
}
