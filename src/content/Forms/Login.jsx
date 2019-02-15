import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter email"
              autoComplete="off"
              autofocus
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control"
              type="password"
              id="pwd"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
