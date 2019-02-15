import React, { Component } from "react";
import Registration from "./content/Forms/Registration.jsx";
import UserList from "./content/AdminPages/UserList.jsx"
import TopNav from "./content/TopNav"
import RenderBody from "./content/RenderBody"
import Footer from "./content/Footer"
import "babel-polyfill"
import "regenerator-runtime/runtime";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      validForm: false,
      formErrorMsg: '',
      formData:{},
      registeredSuccess: false,
      regResp: {}
    };
  }

  clickRegister (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get('email'));
    console.log(data.get('first_name'));
    console.log(data.get('last_name'));
    console.log(data.get('phone'));
    console.log(data.get('age'));
    console.log(data.get('password1'));
    console.log(data.get('password2'));
    //let localResponse = {}
    this.handleRegistrationValidation(data)
  }

  async componentDidUpdate() {
    const { validForm, registeredSuccess, formData } = this.state
    if( validForm!==true || registeredSuccess===true) {
      console.log("form is not valid or regSuccess" + validForm + " - " + registeredSuccess)
      return;
    }
    const config = {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "omit",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Accept": 'application/json'
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: formData,
    }

    let localResponse = {};
    await fetch(`http://localhost:8000/api/v1/users/`, config)
    .then((response) => {
        localResponse = response
        this.setState({
          'registeredSuccess': true,
          'regResp': JSON.stringify(response)
        });
        console.log(JSON.stringify(response.email))
      })
    .catch((response) => {
      localResponse = response
        this.setState({
          'registeredSuccess': false,
          'regResp': JSON.stringify(response)
        });
        console.error(JSON.stringify(response))
        console.log("catchError"+error);
      });
        console.log(JSON.stringify(response))
        console.log("localRep:" + localResponse.email);
    }

  handleRegistrationValidation (data) {
    let isValidForm = false,
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

  switchRegister (e) {
    this.setState({'registeredSuccess':false,'validForm':false});
  }

  render() {
    const { formErrorMsg, registeredSuccess, validForm, regResp } = this.state;
    const registration = !registeredSuccess && !validForm ? <Registration handleValidate={(e) => this.handleValidate(e)} clickRegister={(e) => this.clickRegister(e)} /> : <UserList switchRegister={(e) => this.switchRegister(e)} />;
    const responseClass = !registeredSuccess && !validForm ? 'text-danger' : ''
    return (
      <div className="App">
        <Router>
          <div>
            <TopNav />
            <RenderBody />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
