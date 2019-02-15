import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//MedicalInsurance.jsx
class MedicalInsuranceMoreForms extends Component {

render() {
    return (
    <div>
    <h2>Other Details</h2>
    <form>
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

export default MedicalInsuranceMoreForms;