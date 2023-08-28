// Class Component (statefull component)
// Function component (stateless)
// hooks using hooks you can use state inside the functional component

import { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      errorMessage: "",
      success: "",
    };
  }

  componentWillMount() {
    console.log("hey");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  // optimize
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState, this.state);
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prepprops, prevstate) {
    console.log("componentDidUpdate");
  }

  handleChange(e) {
    const updatedState = { ...this.state };
    updatedState[e.target.name] = e.target.value;
    this.setState(updatedState);
  }

  async authenticateUser() {
    try {
      const userData = fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.state.userName,
          password: this.state.password,
          // expiresInMins: 60, // optional
        }),
      });

      this.setState({
        success: "SuccessFully Logged in, Please check your email !!",
        errorMessage: "",
      });
    } catch (error) {
      console.log(error);
      this.setState({
        userName: "",
        password: "",
        errorMessage: "Something Went wrong!!",
      });
    }
  }
  render() {
    console.log("render");
    return (
      <div className="login">
        <h3>Login</h3>
        <input
          onChange={(e) => this.handleChange(e)}
          name="userName"
          value={this.state?.userName}
          placeholder="Type user Name"
        />
        <input
          name="password"
          onChange={(e) => this.handleChange(e)}
          value={this.state?.password}
          placeholder="password"
          type="password"
        />
        <button className="button" onClick={() => this.authenticateUser()}>
          Continue
        </button>
        {this.state.errorMessage && (
          <span className="error">{this.state.errorMessage}</span>
        )}
        {this.state.success && (
          <span className="success">{this.state.success}</span>
        )}
      </div>
    );
  }
}

export default Login;

// constructor
// componentWillMount
//render => this render method will return jsx
// componentDidmount
// shouldComponentUpdate
// componentDidUpdare
// componentWillUnmount;

// useState , useHooks , useCallback , useMemo , useReducer , useRef , useContext
