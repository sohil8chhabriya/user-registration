import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class TopNav extends Component {
render() {
return (
  <nav className="navbar navbar-expand-lg navbar-light bg-info text-white">
    <a className="navbar-brand" href="#">SNDT Policy Portal</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/">Home</NavLink>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/aboutus">About Us</NavLink>
          </span>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Policies
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <span className="dropdown-item"><Link to="/medicalInsurance">Medical Insurance</Link></span>
            <span className="dropdown-item"><Link to="/termInsurance">Term Plan</Link></span>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item"><Link to="/vehicleInsurance">Vehicle Insurance</Link></span>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Admin Pages
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <span className="dropdown-item"><Link to="/userList">See User List</Link></span>
            <span className="dropdown-item"><Link to="/newPolicyRequest">See New Policy Request</Link></span>
            <span className="dropdown-item"><Link to="/claimRequest">See Claim Requests</Link></span>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item"><Link to="/addNewPolicy">Add New Policy</Link></span>
            <span className="dropdown-item"><Link to="/modifyPolicy">Modify old policies</Link></span>
            
          </div>
        </li>

        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/payPremium">Pay Premium</NavLink>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/claim">Claim</NavLink>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/login">Login</NavLink>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/registration">Registration</NavLink>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <NavLink className="text-light" to="/contact">Contact Us</NavLink>
          </span>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success bg-dark text-light" type="submit">Search</button>
      </form>
    </div>
  </nav>
);
}
}

export default TopNav;