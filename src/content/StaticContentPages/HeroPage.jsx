import React, { Component } from "react";
import HeroPageContent from "./HeroPageContent"

class HeroPage extends Component {
render() {
return (
<div>
  <div className="container">
    <center>
      <h1>Insurance Policy Portal</h1>
    </center>
    <HeroPageContent />
  </div>
</div>
);
}
}

export default HeroPage;