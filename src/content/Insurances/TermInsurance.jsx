import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TermInsurance extends Component {
  render() {
    return (
      <div className="container">
        <center><h1>Term Insurance</h1></center>
        <p>Instructions for filling up the form</p>

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

</form>
<h2>educational qualification:</h2>
  <form>
    <div className="form-group"><label htmlFor="Matriculate">Matriculate</label>
      <input type="checkbox" name="Matriculate" value="Matriculate"></input></div>

    <div className="form-group"><label htmlFor="Under Graduate">Under Graduate</label>
      <input type="checkbox" name="Under Graduate" value="Under Graduate"></input></div>

    <div className="form-group"><label htmlFor="Graduate">Graduate</label>
      <input type="checkbox" name="Graduate" value="Graduate"></input></div>

    <div className="form-group"><label htmlFor="Post Graduate">Post Graduate</label>
      <input type="checkbox" name="Post Graduate" value="Post Graduate"></input></div>

    <div className="form-group"><label htmlFor="Professionally Qualified">Professionally Qualified</label>
      <input type="checkbox" name="Professionally Qualified" value="Professionally Qualified"></input></div>
  </form>
  <h2>Family Monthly Income:</h2>
  <form>
    <div className="form-group"><label htmlFor="Up to 20,000">Up to 20,000</label>
      <input type="checkbox" name="Up to 20,000" value="Up to 20,000"></input></div>

    <div className="form-group"><label htmlFor="20,001 to 50,000">20,001 to 50,000</label>
      <input type="checkbox" name="20,001 to 50,000" value="20,001 to 50,000"></input></div>

    <div className="form-group"><label htmlFor="50,001 to 1 lakh">50,001 to 1 lakh</label>
      <input type="checkbox" name="50,001 to 1 lakh" value="50,001 to 1 lakh"></input></div>

    <div className="form-group"><label htmlFor="Above 1 lakh">Above 1 lakh</label>
      <input type="checkbox" name="Above 1 lakh" value="Above 1 lakh"></input></div>
  </form>
  <h2>financier details</h2>
  <form>
    <div className="form-group"><label htmlFor="name of Instructions">name of Instructions</label>
      <input id="name of Instructions" name="name of Instructions" type="text" className="form-control error"></input></div>

    <div className="form-group"><label htmlFor="name of financier adress financier">name of Instructions</label>
      <input id="name of Instructions" name="name of Instructions" type="text" className="form-control error"></input></div>
  </form>
      </div>
    );
  }
}

export default TermInsurance;
