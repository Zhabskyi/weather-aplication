class InputValidator {

	lengthChecker = (e, field) => {
		const value = e.target.value;
		field = false;
		if ( value.length < 5 ) {
			 field = true;
			//this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			console.log(e.target);
    } else {
			field = false;
			e.target.setCustomValidity('');
		}
		return field;
	}

	nameLengthChecker = (e) => {
		if ( e.target.value.length < 5 ) {
			const isName = true;
    	this.setState(state => Object.assign({}, state, {isName}));
			//this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			console.log(e.target);
    } else {
			const isName = false;
			this.setState(state => Object.assign({}, state, {isName}));
			e.target.setCustomValidity('');
		}
		return this.state.isName;
	}

	passwordLengthChecker = (e) => {
		if ( e.target.value.length < 5 ) {
			const isPassword = true;
    	this.setState(state => Object.assign({}, state, {isPassword}));
			//this.setState({errors: ['Field too short']})
			e.target.setCustomValidity('Have to be longer than 5 symbols');
			console.log(e.target);
    } else {
			const isPassword = false;
			this.setState(state => Object.assign({}, state, {isPassword}));
			e.target.setCustomValidity('');
		}
		return this.state.isPassword;
	}
}

export default InputValidator;