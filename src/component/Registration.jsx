import React, { Component } from "react";

class Registration extends Component {
  render() {
    return (
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={(e) => this.props.clickRegister(e)}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control error"
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => this.props.handleValidate(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Second Name:</label>
            <input
              className="form-control error"
              id="lastName"
              type="text"
              placeholder="Enter surname"
              onChange={(e) => this.props.handleValidate(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control error"
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => this.props.handleValidate(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-control error"
              type="password"
              id="pwd"
              placeholder="Enter password"
              onChange={(e) => this.props.handleValidate(e)}
            />
            <sub>Password must be Alphanumeric - Minimum 8 Characters, Contains 1
            Number and Contains 1 Capital letter</sub>
          </div>
          <div className="form-group">
            <label htmlFor="cnfpwd">Confirm Password:</label>
            <input
              className="form-control error"
              type="password"
              id="cnfpwd"
              placeholder="Please re enter your password"
              onChange={(e) => this.props.handleValidate(e)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Registration;
