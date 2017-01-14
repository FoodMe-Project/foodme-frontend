import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import AuthService from './utils/AuthService';
import Container from './components/Container/Container.js';
import Userpage from './components/Userpage/Userpage.js';
import Homepage from './components/Homepage/Homepage.js';

const auth = new AuthService('jDjPIyEAQJ8oOwKQIWWANpbCkQrkm1r1', 'charlesjamb.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/home' });
  }
};

export const makeRoutes = () => {

	return (
		<Route path=''>
			<Route path="/" component={Container} auth={auth}>
				<IndexRedirect to="/home" />
				<Route path="user" component={Userpage} onEnter={requireAuth}/>
				<Route path="home" component={Homepage}/>
				<Route path="access_token=:token" component={Homepage}/>
			</Route>
		</Route>
	);
};

export default makeRoutes;