import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavMenu from '../components/nav-menu/NavMenu';
import SignUp from '../components/sign-up/SignUp';
import Login from '../components/login/LogIn';
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
	//				debugger;
					return <SignUp {...props} authService={authService} />
				}}/>
				<Route path ="/login" render={({props}) =>  <Login {...props} authService={authService} />} />
			</div>
		</Router>
	);
	}
}

export default App;
