import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Footer extends Component {
render() {
return (
<footer className="page-footer font-small navbar-light bg-info">
  <div className="container text-center text-md-left">
    <div className="row">
      <div className="col-md-4 mx-auto">
        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>
      </div>

      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

        <ul className="list-unstyled">

        </ul>

      </div>

      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

        <ul className="list-unstyled">
        </ul>

      </div>

      <hr className="clearfix w-100 d-md-none" />

      <div className="col-md-2 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

        <ul className="list-unstyled">
          <li>
            <Link to="/termInsurance">Term Insurance</Link>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <hr />

  <ul className="list-unstyled list-inline text-center py-2">
    <li className="list-inline-item">
      <h5 className="mb-1">Register for free</h5>
    </li>
    <li className="list-inline-item">
      <span className="btn btn-danger btn-rounded">
        <Link to="/registration">Sign up!</Link></span>
    </li>
  </ul>

  <hr />

  <ul className="list-unstyled list-inline text-center">
    <li className="list-inline-item">
      <a className="btn-floating btn-fb mx-1">
        <i className="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-tw mx-1">
        <i className="fab fa-twitter"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-gplus mx-1">
        <i className="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-li mx-1">
        <i className="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li className="list-inline-item">
      <a className="btn-floating btn-dribbble mx-1">
        <i className="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>

  <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://sndt.ac.in/"> SndtPolicyPortal.com</a>
  </div>

</footer>

);
}
}

export default Footer;