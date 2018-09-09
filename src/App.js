import React, { Component } from "react";
import Registration from "./component/Registration.jsx";
import Login from "./component/Login.jsx";

class App extends Component {
  handleRegistrationValidation(e) {
    e.preventDefault();
    alert("called onSubmit function" + e.target.name);
  }
  validatePassword (e) {
    e.preventDefault();
    const regularExpression = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    console.log(regularExpression.test(e.target.value));
    return regularExpression.test(e.target.value);
  }
  handleValidate(e){
    e.preventDefault();
    switch(e.target.id){
      case "pwd": e.target.className = !this.validatePassword(e) ? "form-control text-danger" : "form-control";
      break;
    }
  }
  render() {
    return (
      <div className="App">
        <Registration handleValidate={(e) => this.handleValidate(e)} clickRegister={(e) => this.handleRegistrationValidation(e)} />
      </div>
    );
  }
}

export default App;
