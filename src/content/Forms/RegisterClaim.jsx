import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getConfig from "../../constants/utils"

class RegisterClaim extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSuccess: false
        }
    }

    registerClaimApiCall (e) {
        alert("registerClaimApiCall")
        e.preventDefault();
        const { policyId, sumAssured } = this.props;
        var data = new FormData(e.target);
        const claimAmount = parseInt(data.get('claimAmount'))
        const bills = parseInt(data.get('claimAmount'))
   
        if(claimAmount > sumAssured) {
            alert("claim Amount cannot exceed sumAssured it should be less than" + sumAssured);
            this.setState({
                isSuccess: false
            });
        }

        const url = "http://localhost:8080/claim/"+policyId+"/"+claimAmount+"/"+bills
        const config = {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }
        fetch(url, config)
        .then(response => response)
        .then(
            (result) => {
                this.setState({
                    isSuccess: result
                });
            }
        )
    }

    render(){
        const { userId, policyId, sumAssured } = this.props;
        var { isSuccess } = this.state;
        const isClaimRegistered = isSuccess ? <p>Your Claim is registered. Our customer care suppor will contact in regards to your request within 24-48 hours</p> : null;
        const claimAmountPlaceholderText = "Enter amount to claim. Not more than " + sumAssured
        return(
            <div>
                <p>Your Policy Id is {policyId}</p>
                <p>Your User Id is  {userId}</p>
                <p>Your Sun Assured is  {sumAssured}</p>
            <form onSubmit={(e) => this.registerClaimApiCall(e)} >
                <div className="form-group">
                    <label htmlFor="claimAmount">Claim Amount:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="claimAmount"
                    name="claimAmount"
                    placeholder={claimAmountPlaceholderText}
                    autoComplete="off"
                    autoFocus
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bills">Submit Bills Details:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="bills"
                    name="bills"
                    placeholder="Enter the names of bills (comma seprated) you are submitting against the claim"
                    />
                </div>
                <center><input type="submit" value="Claim" className="btn btn-primary text-center"></input></center>
            </form>
                {isClaimRegistered}
            </div>
        )
    }
}

export default RegisterClaim;