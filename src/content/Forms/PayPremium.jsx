import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import getConfig from "../../constants/utils"

class PayPremium extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSuccess: false
        }
    }

    payPremium (e) {
        const { premium, userId, policyId } = this.props;

        const url = "http://localhost:8080/policy/"+policyId+"/"+userId+"/"+premium
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
        const { premium, userId, policyId } = this.props;
        var { isSuccess } = this.state;
        const premiumMonthly = premium/12
        const premiumPaid = isSuccess ? <p>Premium Paid</p> : "";
        return(
            <div>
                <p>Base Form Submitted Successfully</p>
                <p>Your Premium is calculated to be {premium} /- per year</p>
                <p>Monthly premium is {premiumMonthly}</p>
                <p>Your Policy Id is {policyId}</p>
                <p>Your User Id is  {userId}</p>
                <p>Pay Your premium by clicking on the button below</p>
                <input type="button" className="btn btn-info" onClick={(e) => this.payPremium(e)} value="Pay Premium" />
                {premiumPaid}
            </div>
        )
    }
}

export default PayPremium;