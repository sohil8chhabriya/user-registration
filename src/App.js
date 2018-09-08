import React, { Component } from "react";
import Registration from "./component/Registration.jsx";
import Login from "./component/Login.jsx";

class App extends Component {
  onSubmit() {
    console.log("called onSubmit function");
  }
  render() {
    return (
      <div className="App">
        <Registration onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;
