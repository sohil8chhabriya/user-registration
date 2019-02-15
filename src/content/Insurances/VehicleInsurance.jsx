import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class VehicleInsurance extends Component {
  render() {
    return (
      <div className="container">
        <center><h1>Vehicle Insurance</h1></center>
        <p>Instructions for filling up the form</p>

<p>
  1. Please answer all questions in BLOCK letters
  2. The Liability of the Company does not commence until this Proposal has been accepted by the Company and
  premium has been paid
  3. This Proposal will be the basis of any subsequent policy that we issue to you. It is therefore essential that
  you provide all the information in this Proposal FULLY AND
  ACCURATELY and that you provide us with any and all additional information relevant to risk to be insured or our
  decision as to acceptance of the risk or the terms
  upon which it should be accepted

</p>
<h2> personl details</h2>

<form>
  <div className="form-group"><label htmlFor="name">Name</label>
    <input id="name" name="name" type="text" className="form-control error"></input></div>
  <div className="form-group"><label htmlFor="phone">Phone Number</label>
    <input id="phone" name="phone" type="text" className="form-control error"></input></div>

  <div className="form-group"><label htmlFor="email">Email</label>
    <input id="email" name="email" type="text" className="form-control error"></input></div>

  <div className="form-group"><label htmlFor="age">Age</label>
    <input id="age" name="age" type="text" className="form-control error"></input></div>

  <div className="form-group"><label htmlFor="gender">Gender</label>
    <input type="radio" name="gender" id="male" />Male
    <input type="radio" name="gender" id="female" />Female
    <input type="radio" name="gender" id="other" />Other
    </div>
    <div className="form-group"><label htmlFor="dob">date of birth</label>
      <input id="dob" name="dob" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="pan">PAN NO</label>
      <input id="pan" name="pan" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="occupation">OCCUPATION</label>
      <input id="occupation" name="occupation" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="BUSSINESS">BUSSINESS</label>
      <input id="BUSSINESS" name="BUSSINESS" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="SALARIED">SALARIED</label>
      <input id="SALARIED" name="SALARIED" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="PROFESSIONL">PROFESSIONL</label>
      <input id="PROFESSIONL" name="PROFESSIONL" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="STUDENT">STUDENT</label>
      <input id="STUDENT" name="STUDENT" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="HOUSE WIFE">HOUSE WIFE</label>
      <input id="HOUSE WIFE" name="HOUSE WIFE" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="RETIRED">RETIRED</label>
      <input id="RETIRED" name="RETIRED" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="OTHER">OTHER</label>
      <input id="OTHER" name="OTHER" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="ADDRESS">ADDRESS</label>
      <input id="ADDRESS" name="ADDRESS" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="Mobile">Mobile</label>
      <input id="Mobile" name="Mobile" type="text" className="form-control error"></input></div>
</form>
      </div>
    );
  }
}

export default VehicleInsurance;
