import React from "react";
import classnames from "classnames";

import Input from "../../input/Input";

class SignUpForm extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    isEmail: false,
    isName: false,
    isPassword: false
  };

  handleFormSignIn = e => {
    e.preventDefault();
    if (
      this.lengthChecker("isEmail") &&
      this.lengthChecker("isName") &&
      this.lengthChecker("isPassword")
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
        const value = true;
        this.setState(oldState =>
          Object.assign(
            {},
            oldState,
            { [field]: value },
            { errors: [`${field} too short`] }
          )
        );
        e.target.setCustomValidity("Have to be longer than 5 symbols");
      } else {
        const value = false;
        this.setState({ [field]: value });
        e.target.setCustomValidity("");
      }
      return this.state.field;
    };
  };

  renderErrors = () => {
    if (this.props.errors.length > 0) {
      return this.props.errors.map(e => {
        console.log(e);
        return <div>{e.msg}</div>;
      });
    }
    return null;
  };

  render() {
    const { isEmail, isName, isPassword } = this.state;
    // let inputPasswordClass = classnames('sign-in__container__input', {'input-error': isPassword});

    return (
      <form onSubmit={this.handleFormSignIn}>
        <Input
          title="email"
          onChange={this.chnageHandler("email")}
          onBlur={this.validator("isEmail")}
          value={this.state.email}
          type="email"
          id="email"
        />
        <Input
          title="name"
          onChange={this.chnageHandler("name")}
          onBlur={this.validator("isName")}
          value={this.state.name}
          type="text"
          id="name"
        />
        <Input
          title="password"
          onChange={this.chnageHandler("password")}
          onBlur={this.validator("isPassword")}
          value={this.state.password}
          type="password"
          id="password"
        />
        <button type="Submit" className="sign-in__button">
          SIGN UP
        </button>
      </form>
    );
  }
}

export default SignUpForm;
