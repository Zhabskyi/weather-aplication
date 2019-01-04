import React from "react";

import Input from "../../input/Input";
import Button, { TYPES } from '../../button/Button';

const FORM_FIELDS = {
	isEmailFieldValid: 'isEmailFieldValid',
	isPasswordValid: 'isPasswordValid',
	isNameValid: 'isNameValid'
}

class SignUpForm extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    [FORM_FIELDS.isEmailFieldValid]: true,
    [FORM_FIELDS.isPasswordValid]: true,
    [FORM_FIELDS.isNameValid]: true
  };

  handleFormSignIn = e => {
    e.preventDefault();
    if (
      this.validator(FORM_FIELDS.isEmailFieldValid) &&
      this.validator(FORM_FIELDS.isPasswordValid) &&
      this.validator(FORM_FIELDS.isNameValid)
    ) {
      this.props.onSignUp(this.state);
    }
  };

  chnageHandler = field => {
    return e => {
      const value = e.target.value;
      this.setState({ [field]: value });
    };
  };

  validator = field => {
    return e => {
      if (e.target.value.length < 5) {
        const value = false;
        this.setState(oldState => ({ ...oldState,  [field]: value }));
        e.target.setCustomValidity("Have to be longer than 5 symbols");
      } else {
				const value = true;
        this.setState(oldState => ({ ...oldState,  [field]: value }));
        e.target.setCustomValidity("");
      }
      return this.state.field;
    };
  };

  render() {
    return (
      <form onSubmit={this.handleFormSignIn}>
        <Input
          title="E-mail"
          onChange={this.chnageHandler("email")}
          onBlur={this.validator(FORM_FIELDS.isEmailFieldValid)}
					value={this.state.email}
					valid={this.state[FORM_FIELDS.isEmailFieldValid]}
          type="email"
					id="email"
        />
        <Input
          title="Name"
          onChange={this.chnageHandler("name")}
          onBlur={this.validator(FORM_FIELDS.isNameValid)}
          value={this.state.name}
          type="text"
					id="name"
					valid={this.state[FORM_FIELDS.isNameValid]}
        />
        <Input
          title="Password"
          onChange={this.chnageHandler("password")}
          onBlur={this.validator(FORM_FIELDS.isPasswordValid)}
          value={this.state.password}
          type="password"
					id="password"
					valid={this.state[FORM_FIELDS.isPasswordValid]}
        />
        <Button title={'Sign Up!'} type={TYPES.default}/>
      </form>
    );
  }
}

export default SignUpForm;