import React, { Component } from "react";

class Registration extends Component {
  render() {
    return (
      <div className="container">
        <h1>Signup</h1>
        <form onSubmit={(e) => this.props.clickRegister(e)}>
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            {/*<input type="hidden" id="username" name="username" />*/}
            <input
              className="form-control error"
              id="first_name"
              name="first_name"
              type="text"
              placeholder="Enter First Name"
              autofocus
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Second Name:</label>
            <input
              className="form-control error"
              id="last_name"
              name="last_name"
              type="text"
              placeholder="Enter surname"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control error"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              autocomplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              className="form-control error"
              type="tel"
              id="phone"
              name="phone"
              maxLength={10}
              minLength={10}
              placeholder="Please enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Age:</label>
            <input
              className="form-control error"
              type="number"
              id="age"
              name="age"
              maxLength={1}
              minLength={0}
              placeholder="Please enter your age"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password1">Password:</label>
            <input
              className="form-control error"
              type="password"
              id="password1"
              name="password1"
              placeholder="Enter password"
              required
            />
            <sub>Password must be Alphanumeric - Minimum 8 Characters, Contains 1
            Number and Contains 1 Capital letter</sub>
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password:</label>
            <input
              className="form-control error"
              type="password"
              id="password2"
              name="password2"
              placeholder="Please re enter your password"
              required
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
