import React, { Component } from "react";

class AboutUsPage extends Component {
render() {
return (
<div>
  <div className="container">
    <center>
      <h1>About Us</h1>
    </center>
    <p>"We, at SNDT Policy Portal, aspire to be your one-stop-shop, your go to place ever for anything related
        to insurance. This means:</p>
    <ol>
        <li>We tie up with all major insurers and let you compare, all in one place. So, you do not
        have to visit other websites or speak to other insurance companies. Its all here, under one
        website.</li>
        <li>We remove all the jargons from the policy details and explain everything in plain english.</li>
        <li>Our experts keep it simple. They really give advice, and not enforce a certain insurer to
        you.</li>
    </ol>
    <p>But don't just blindly believe what we are saying. We have a 72% customer rentention rate,
        which is the by far one of the best in the market. We are also the highest rated insurance
        website on facebook and Google+. :)"</p>
  </div>
</div>
);
}
}

export default AboutUsPage;