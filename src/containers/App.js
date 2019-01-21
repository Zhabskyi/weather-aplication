import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavMenu from '../components/nav-menu/NavMenu';
import SignUp from '../components/sign-up/SignUp';
import Login from '../components/login/LogIn';
import Feed from '../components/feed/Feed';
import PrivateRoute from '../components/private-root/PrivateRoute';
import './App.css';
import AuthService from '../commons/scripts/authService/AuthService';

const authService = new AuthService();

class App extends Component {
  render() { 
		return (
		<Router>
			<div className="page-wrapper">
				<NavMenu>
					<Link to="/sign-up">SignUp</Link>
					<Link to="/login">Login</Link>
				</NavMenu>
				<Route path="/sign-up" render={(props) => {
					return <SignUp {...props} authService={authService} />
				}}/>
				<Route path ="/login" render={(props) =>  {
					return <Login {...props} authService={authService} /> 
				}} />

				<PrivateRoute path='/posts' component={Feed} authService={authService}/>  
			</div>
		</Router>
	);
	}
}

export default App;
