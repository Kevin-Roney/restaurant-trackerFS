import { useState, useEffect } from 'react';
import { getUser, logout } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import UpdatePage from './UpdatePage';
import RestaurantList from './RestaurantList';
import CreatePage from './CreatePage';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    async function loadUser() {
      const user = await getUser();
      if (user) {
        setToken(user.access_token);
        setEmail(user.user.email);
      }
    }
    loadUser();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
