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

  async function handleLogout() {
    await logout();
    setEmail('');
    setToken('');
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {
            token
              ? <>
                <NavLink
                  to='/restaurants'
                  className={isActive => 'nav-link' + (!isActive ? ' unselected' : '')}>
                    Restaurants
                </NavLink>
                <NavLink
                  to='/create'
                  className={isActive => 'nav-link' + (!isActive ? ' unselected' : '')}>
                    Add Restaurant
                </NavLink>
                <button onClick={handleLogout}>Logout?</button>
              </>
              : <></>
          }
        </header>
      </div>
    </Router>
  );
}

export default App;
