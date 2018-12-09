import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavMenu from './components/nav-menu/NavMenu';
import SignIn from './components/sign-in/SignIn';
import Login from './components/login/LogIn';
import './App.css';

class App extends Component {
  render() { 
		return (
		<Router>
			<div className="page-wrapper">
				<NavMenu>
					<Link to="/sign-up">SignUp</Link>
					<Link to="/login">Login</Link>
				</NavMenu>
				<Route path="/sign-up" component={SignIn}/>
				<Route path ="/login" component={Login} />
			</div>
		</Router>
	);
	}
}

export default App;
