import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicDetailForm from "../Forms/BasicDetailForm"
import PayPremium from "../Forms/PayPremium"
import "babel-polyfill"
import "regenerator-runtime/runtime";

class TermInsurance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseFormSubmit: false,
      premium: "",
      validForm: false,
      formErrorMsg: '',
      formData:{},
      savedUserId: "", 
      generatedPolicyId: ""
    }
  }

  resetState () {
    this.setState({baseFormSubmit: false, premium: "", validForm: false, formData:{}});
  }

  handleSubmitValidation (data) {
    /*let isValidForm = false,
        formErrorMsg = '';
    const pwd1 = data.get('password1'),
          pwd2 = data.get('password2');
    isValidForm = this.validatePassword(pwd1);
    formErrorMsg = !isValidForm ? 'password is invalid':'';
    
    isValidForm = this.validatePhone(data.get('phone'));
    formErrorMsg = !isValidForm ? 'invalid phone number':'';
    //confirmed password check
    isValidForm = (pwd1!=="" && pwd2!=="" && pwd1===pwd2);
    formErrorMsg = !isValidForm ? 'password is invalid':'';
    console.log("Form Validation complete isValid: " + isValidForm);
    this.setState({
      "validForm": isValidForm,
      "formErrorMsg": formErrorMsg,
      "formData":data
    });
    */
    this.setState({
      "validForm": true,
      "formErrorMsg": "",
      "formData":data
    });
}

validatePassword (password) {
    const regularExpression = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    console.log(regularExpression.test(password));
    return regularExpression.test(password);
}

validatePhone (phone) {
    const regularExpression = /^(?=.*[0-9]).{10,10}$/;
    console.log(regularExpression.test(phone));
    return regularExpression.test(phone);
}

async componentDidUpdate() {
    const { validForm, formData } = this.state;
    var object = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    var jsonData = JSON.stringify(object);

    if( !validForm || this.state.baseFormSubmit) {
        console.log("form is not valid or submitted successfully" + validForm);
        return;
    }
    const config = {
      method: "POST",
      credentials: "omit",
      headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
      },
      body: jsonData
    }
    await fetch(`http://localhost:8080/users/`, config)
    .then(response => response.json())
    .then(data => this.setState({ savedUserId: data.userId, generatedPolicyId: data.policyId, premium: data.premium, baseFormSubmit: true }))
    .catch(data => this.setState({ premium: 0, baseFormSubmits: false }));
}

  render() {
    const { baseFormSubmit, premium, savedUserId, generatedPolicyId  } = this.state;
    const BasicFormView = !baseFormSubmit ? <BasicDetailForm handleSubmitValidation={(data) => this.handleSubmitValidation(data)} /> : <PayPremium premium={premium} userId={savedUserId} policyId={generatedPolicyId} />;
    return (
    <div className="container">
      <center>
        <h1>Term Insurance</h1>
      </center>
      { BasicFormView }
      {/*<MedicalInsuranceMoreForms />*/}
      <center><input type="button" value="Reset" onClick={(e) => this.resetState(e)} className="btn btn-primary text-center"></input></center>
    </div>
    );
  }
}

export default TermInsurance;
