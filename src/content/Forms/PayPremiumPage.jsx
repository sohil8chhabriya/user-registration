import React, { Component } from "react";
import PayPremium from "./PayPremium";

class PayPremiumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyDetails: {
        data:{},
        policyId:"", 
        premiumAmount: "",
        user: {
          userId: "",
        }
      }
    }
  }

  checkPremium (event) {
    event.preventDefault();
    var data = new FormData(event.target);
    const email = data.get('email') ? data.get('email') : null
    const phone = data.get('phone') ? data.get('phone') : null
    const policyId = data.get('policyId') ? data.get('policyId') : null
    const url = "http://localhost:8080/policy/search/"+email+"/"+phone+"/"+policyId
    const config = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin":"*"
        }
    }
    fetch(url, config)
    .then(response => response.json())
    .then(data => this.setState({ data:data, policyDetails:{policyId:data.policyId,premiumAmount:data.premiumAmount, user:{userId:data.user.userId}}}))
  }

  render() {
    const { policyDetails } = this.state;
    const showPayPremiumForm = policyDetails.policyId !== "" ? <PayPremium premium={policyDetails.premiumAmount} userId={policyDetails.user.userId} policyId={policyDetails.policyId} /> : null;
    return (
      <div className="container">
        <center>
          <h1>Pay Your Preminum</h1>
        </center>
        <p>Pay Your Preminum with just your policy number</p>
        <p>Enter one of the following to check your policy Details</p>
        <form onSubmit={(e) => this.checkPremium(e)} >
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              className="form-control"
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="policyId">Policy Number:</label>
            <input
              className="form-control"
              type="text"
              id="policyId"
              name="policyId"
              placeholder="Enter your Policy Id"
            />
          </div>
          <center><input type="submit" value="Check Premium" className="btn btn-primary text-center"></input></center>
        </form>
        {showPayPremiumForm}
      </div>
    );
  }
}

export default PayPremiumPage;