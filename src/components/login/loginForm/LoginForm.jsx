import React from 'react';
import { BrowserRouter as  withRouter} from "react-router-dom";


//import AuthService from '../../../commons/scripts/authService/AuthService';
import Input from "../../input/Input";
import Button, { TYPES } from '../../button/Button';

//const url = 'https://rest-node-course-api.herokuapp.com/auth/login';

export class LoginForm extends React.Component {
	constructor() {
		super();
		this.redirect = null;
		this.state = {
			email : '',
			password : '',
			redirectToReferrer: false
		}
	}

	componentDidUpdate () {
		console.log(this.state.redirectToReferrer + ' component Did update');
		if (this.state.redirectToReferrer) {
      this.props.history.push("/posts");
    }
	}



	handleFormLogin = (e) => {
		e.preventDefault();
		return fetch('https://rest-node-course-api.herokuapp.com/auth/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
			.then(resp => resp.json())
      .then(resp => {
        console.log('>>>', resp);
        this.props.authService.setToken(resp.token);
			})
		.then(() => {
			console.log(this.state.redirectToReferrer);
			if (this.props.authService.loggedIn()) {
				this.setState(oldState => ({...oldState, redirectToReferrer: true}))};
			
		})
		.then(() => {
			console.log(this.state.redirectToReferrer);
		})
      .catch(e => {
        console.log(e);
      });
}
	
	chnageHandler = (field) => {
		return (e) => {
			const value = e.target.value;
			this.setState({[field]: value});
		}
	}

  render() {
		//const { from } = this.props.location.state || { from: { pathname: '/' } }

		

		//if (this.state.redirectToReferrer) return <Redirect to='/' />;

    return ( <div>
			<form onSubmit={this.handleFormLogin}>
				<Input
					title="E-mail"
					onChange={this.chnageHandler('email')} 
					value={this.state.email}
					valid={true}
					type="email" 
					id='email' 
				/>
				<Input
					title="Password"
					onChange={this.chnageHandler('password')} 
					value={this.state.password}
					valid={true}
					type="password" 
					id='password' 
				/>
				<Button title={'Log in'} type={ TYPES.default}/>
			</form>
			</div>
		);
		}
	}

export default withRouter(LoginForm);