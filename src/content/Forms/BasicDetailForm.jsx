import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "babel-polyfill"
import "regenerator-runtime/runtime";

// BasicDetailForm.jsx
class BasicDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
   
    clickSubmit (event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.handleSubmitValidation(data)
    }

    render() {
        return(
            <div>
                <h2>Basic personl details</h2>

                <form onSubmit={(e) => this.clickSubmit(e)} >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="text" className="form-control error"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="text" className="form-control error"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input type="radio" name="gender" id="male" />Male
                        <input type="radio" name="gender" id="female" />Female
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input id="dob" name="dob" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input id="address" name="address" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation</label>
                        <input id="occupation" name="occupation" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="panNo">Pan No</label>
                        <input id="panNo" name="panNo" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group"><label htmlFor="income">Income</label>
                        <input type="text" name="income" placeholder="10000"></input>
                    </div>
                    <div className="form-group"><label htmlFor="sumAssured">Sum Assured</label>
                        <input type="text" name="sumAssured" placeholder="100000"></input>
                    </div>
                    <div className="form-group"><label htmlFor="duration">Coverage For (Yrs)</label>
                        <input type="text" name="duration" placeholder="10Yrs"></input>
                    </div>
                    <center>
                        <input type="submit" value="Submit" className="btn btn-primary text-center"></input>
                    </center>
                </form>
            </div>
        );
    }
}

export default BasicDetailForm;