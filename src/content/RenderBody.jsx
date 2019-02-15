import React, { Component } from "react";
import Login from "./Forms/Login"
import Registration from "./Forms/Registration"

import TermInsurance from "./Insurances/TermInsurance"
import HeroPage from "./StaticContentPages/HeroPage"
import MedicalInsurance from "./Insurances/MedicalInsurance"
import VehicleInsurance from "./Insurances/VehicleInsurance"
import UserList from "./AdminPages/UserList"
import NewPolicyRequest from "./AdminPages/NewPolicyRequest"
import ModifyPolicy from "./AdminPages/ModifyPolicy"
import ClaimRequest from "./AdminPages/ClaimRequest"
import AddNewPolicy from "./AdminPages/AddNewPolicy"

import ContactPage from "./StaticContentPages/ContactPage"
import AboutUsPage from "./StaticContentPages/AboutUsPage"
import ClaimPage from "./Forms/ClaimPage"
import PayPremiumPage from "./Forms/PayPremiumPage"
import { hashHistory as Router, Route, Link, NavLink } from "react-router-dom";

class RenderBody extends Component {
render() {
return (
    <div className="content">
        <Route exact={true} path="/" component={HeroPage} />
        <Route path="/home" component={HeroPage} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/medicalInsurance" component={MedicalInsurance} />
        <Route path="/termInsurance" component={TermInsurance} />
        <Route path="/vehicleInsurance" component={VehicleInsurance} />
        <Route path="/claim" component={ClaimPage} />
        <Route path="/aboutus" component={AboutUsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/payPremium" component={PayPremiumPage} />
        <Route path="/userList" component={UserList} />
        <Route path="/newPolicyRequest" component={NewPolicyRequest} />
        <Route path="/addNewPolicy" component={AddNewPolicy} />
        <Route path="/modifyPolicy" component={ModifyPolicy} />
        <Route path="/claimRequest" component={ClaimRequest} />       
    </div>
);
}
}

export default RenderBody;