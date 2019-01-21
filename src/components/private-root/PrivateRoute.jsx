import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...restProps }) => {
	return (
		<Route {...restProps}
			render = {(props) => {
				if(restProps.authService.loggedIn()) {
					return <Component {...props} authService={restProps.authService} />
				} else {
					return <Redirect to={'/login'} />
				}
			} 
		}/>
  );
}

export default PrivateRoute;
