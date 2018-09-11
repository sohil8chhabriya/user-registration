import React, { Component } from "react";
import Registration from "./component/Registration.jsx";
import Login from "./component/Login.jsx";
import UserList from "./component/UserList.jsx"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      validForm: false,
      formErrorMsg: '',
      registeredSuccess: false
    };
  }

  clickRegister (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get('email'));
    console.log(data.get('first_name'));
    console.log(data.get('last_name'));
    console.log(data.get('password1'));
    console.log(data.get('password2'));

    if(this.handleRegistrationValidation(data))
    {
      data.set('username', data.get('email'));
      this.postData('http://localhost:8000/api/v1/rest-auth/registration/', data)
      .then((data) => {
        this.setState({
          'registeredSuccess': true,
          'regResp': JSON.stringify(data)});
        console.log(JSON.stringify(data))
      })
      .catch((data) => {
        this.setState({
          'registeredSuccess': true,
          'regResp': JSON.stringify(data)})
        console.error(JSON.stringify(data))
      });
    }
  }

  postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "no-cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "omit", // include, same-origin, *omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: data, // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses response to JSON
  }

  handleRegistrationValidation (data) {
    let isValidForm = false,
        formErrorMsg = '';
    const pwd1 = data.get('password1'),
          pwd2 = data.get('password2');
    isValidForm = this.validatePassword(pwd1);
    formErrorMsg = !isValidForm ? 'password is invalid':'';
    //confirmed password check
    isValidForm = (pwd1!=="" && pwd2!=="" && pwd1===pwd2);
    formErrorMsg = !isValidForm ? 'password is invalid':'';
    console.log("Form Validation complete isValid: " + isValidForm);
    this.setState({
      "validForm": isValidForm,
      "formErrorMsg": formErrorMsg,
    });
    return isValidForm;
  }

  validatePassword (password) {
    const regularExpression = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    console.log(regularExpression.test(password));
    return regularExpression.test(password);
  }

  switchRegister () {
    this.setState({'registeredSuccess':false});
  }

  render() {
    const { formErrorMsg, registeredSuccess } = this.state;
    const registration = !registeredSuccess ? <Registration handleValidate={(e) => this.handleValidate(e)} clickRegister={(e) => this.clickRegister(e)} /> : <UserList switchRegister={this.switchRegister} />;
    return (
      <div className="App">
        { registration }
        <p className="text-danger">{formErrorMsg}</p>
      </div>
    );
  }
}

export default App;
