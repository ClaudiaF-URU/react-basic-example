import React, { Component } from "react";

export default class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      formErrors: { username: "", password: "" },
      usernameValid: false,
      passwordValid: false,
      formIsValid: false
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.length > 4;
        fieldValidationErrors.username = usernameValid
          ? ""
          : "Username is invalid";
        break;
      case "password":
        passwordValid = value.length > 3;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Password is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formIsValid: this.state.usernameValid && this.state.passwordValid
    });
  }

  login() {
    alert("Log In Successful");
  }

  render() {
      console.log(this.props)
      if (this.props.canLog) {
      let validUser, validPassword;
      if (!this.state.usernameValid && this.state.username != null)
        validUser = <small>Usuario invalido</small>;
      if (!this.state.passwordValid && this.state.password != null)
        validPassword = <small>Contraseña invalida</small>;
      return (
        <div className="login-container">
          <div>
            <label>Usuario: </label>
            <input
              type="text"
              name="username"
              onChange={e => this.handleUserInput(e)}
            />
            {validUser}
          </div>
          <br />
          <div>
            <label>Contraseña: </label>
            <input
              type="password"
              name="password"
              onChange={e => this.handleUserInput(e)}
            />
            {validPassword}
          </div>
          <br />
          <div>
            <button
              disabled={!this.state.formIsValid}
              onClick={() => this.login()}
            >
              Iniciar sesion
            </button>
          </div>
        </div>
      );
    } else {
      return <h1 className="unauthorized">No esta autorizado para iniciar sesion</h1>;
    }
  }
}
