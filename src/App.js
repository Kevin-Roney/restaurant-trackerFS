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
import logo from './logo.png';

function App() {

  const [email, setEmail] = useState(''); //eslint-disable-line
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
          <img className='logo' src={logo}/>
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
        <main>
          <Switch>
            <Route exact path='/'>
              {
                token
                  ? <Redirect to='/restaurants' />
                  : <AuthPage 
                    getUser={getUser}
                    setEmail={setEmail}
                    setToken={setToken} 
                  />
              }
            </Route>
            <Route exact path='/restaurants'>
              {
                token
                  ? <RestaurantList />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/create'>
              {
                token
                  ? <CreatePage />
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path='/restaurants/:id'>
              {
                token
                  ? <UpdatePage />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
