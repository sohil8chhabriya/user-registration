import React, { Component } from "react";
import Registration from "./component/Registration.jsx";
import Login from "./component/Login.jsx";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { validForm: false };
  }

  handleRegistrationValidation(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("called onSubmit function" + e.target.items);
    this.setState({"validForm": true});
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
      case "pwd": e.target.className = !this.validatePassword(e) ? "form-control text-danger error" : "form-control";
      break;
      default: e.target.className = e.target.value !== "" ? "form-control text-danger error" : "form-control";
        e.target.value !== "" ? this.setState({"validForm": true}) : this.setState({"validForm": false});
      break;
    }
    e.target.className !== e.target.value !== "" ? "form-control text-danger error" : "form-control";
  }

  componentDidUpdate() {
   /* if(this.state.validForm) {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }*/
    return;
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
