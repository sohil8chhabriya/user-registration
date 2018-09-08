import React, { Component } from "react";

class Registration extends Component {
  render() {
    return (
      <div className="container">
        <h1>Signup</h1>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              className="form-control"
              id="firstName"
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Second Name:</label>
            <input
              className="form-control"
              id="lastName"
              type="text"
              placeholder="Enter surname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter email"
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
            password must be Alphanumeric - Minimum 8 Characters, Contains 1
            Number & Contains 1 Capital letter
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              id="cnfpwd"
              placeholder="Please re enter your password"
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
