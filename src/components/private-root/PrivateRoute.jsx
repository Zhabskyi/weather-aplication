import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";


//import Feed from '../feed/Feed';


const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest}
		
			render = {(props) => {
				return <Component {...props} authService={props.authService} />
			// (props) =>
			// 	props.authService.loggedIn
			// 		 ? 
      //     	(<Component {...props} authService={props.authService}/>)
			// 		 : 
      //     	(<Redirect
      //       to={{
      //         pathname: "/login",
      //         state: { from: props.location }
      //       }} />)
				} 
			}
			/>
  );
}

export default PrivateRoute;
