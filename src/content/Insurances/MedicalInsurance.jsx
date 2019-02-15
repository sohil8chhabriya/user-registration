import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MedicalInsuranceMoreForms from "../Forms/MedicalInsuranceMoreForms"
import BasicDetailForm from "../Forms/BasicDetailForm"
import "babel-polyfill"
import "regenerator-runtime/runtime";
//import axios from 'axios';

// MedicalInsurance.jsx
class MedicalInsurance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseFormSubmit: false,
      response: "",
    }
  }

  handleFormSubmitBool (bool, response) {
    this.setState({'baseFormSubmit': bool, 'response':response});
  }

  resetState () {
    this.setState({baseFormSubmit: false, response: ""});
  }

  render() {
    const { baseFormSubmit, response } = this.state;
    const BasicFormView = !baseFormSubmit ? <BasicDetailForm handleFormSubmitBool={(bool, response) => this.handleFormSubmitBool(bool, response)} /> : "<p>Base Form Submitted Successfully</p>";
    //const MoreFormView = baseFormSubmit ? <MedicalInsuranceMoreForms /> : "<p>More Form Submitted Successfully</p>";
    return (
    <div className="container">
      <center>
        <h1>Medical Insurance</h1>
      </center>
      { BasicFormView }
      {/*<MedicalInsuranceMoreForms />*/}
      <center><input type="button" value="Reset" onClick={(e) => this.resetState(e)} className="btn btn-primary text-center"></input></center>
    </div>
    );
  }
}

export default MedicalInsurance;
