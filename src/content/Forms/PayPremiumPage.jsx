import React, { Component } from "react";
import HeroPageContent from "../StaticContentPages/HeroPageContent"

class PayPremiumPage extends Component {
render() {
return (
<div>
  <div className="container">
    <center>
      <h1>Pay Your Preminum</h1>
    </center>
    <p>Pay Your Preminum with just your policy number</p>
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address:</label>
        <input
          className="form-control"
          type="email"
          id="email"
          placeholder="Enter email"
          autocomplete="off"
          autofocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Email address:</label>
        <input
          className="form-control"
          type="phone"
          id="phone"
          placeholder="Enter your Phone Number"
        />
      </div>
      <div className="form-group">
        <label htmlFor="policyNumber">Policy Number:</label>
        <input
          className="form-control"
          type="text"
          id="policyNumber"
          placeholder="Enter your Policy Number"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  </div>
</div>
);
}
}

export default PayPremiumPage;