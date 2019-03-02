import React, { Component } from "react";
import RegisterClaim from "../Forms/RegisterClaim";

class ClaimPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyDetails: {
        data:{},
        policyId:"", 
        premiumAmount: "",
        user: {
          userId: "",
          sumAssured: ""
        }
      }
  }
}

  searchPolicy (event) {
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
    .then(data => this.setState({ data:data, policyDetails:{policyId:data.policyId,user:{userId:data.user.userId, sumAssured:data.user.sumAssured}}}))
  }

  render() {
    const { policyDetails } = this.state;
    const registerClaim = policyDetails.policyId !== "" ? <RegisterClaim sumAssured={policyDetails.user.sumAssured} policyId={policyDetails.policyId} userId={policyDetails.user.userId} /> : null;
    return (
      <div className="container">
        <center>
          <h1>Make Claim on your policy</h1>
        </center>
        <p>Enter one of the following to get your policy Details</p>
        <form onSubmit={(e) => this.searchPolicy(e)} >
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
          <center><input type="submit" value="Find your Policy" className="btn btn-primary text-center"></input></center>
        </form>
        {registerClaim}
      </div>
    );
  }
}

export default ClaimPage;