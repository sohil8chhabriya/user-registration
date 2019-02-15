import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "babel-polyfill"
import "regenerator-runtime/runtime";

// BasicDetailForm.jsx
class BasicDetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          validForm: false,
          formErrorMsg: '',
          formData:{},
          regResp: {}
        };
    }
    async componentDidUpdate() {
        const { validForm, formData } = this.state;
       
        var jsonData = convertToJson(formData);

        if( validForm !== true ) {
            console.log("form is not valid" + validForm);
            return;
        }
        const config = {
            method: "POST",
            cache: "no-cache",
            credentials: "omit",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: formData
        }

        await fetch(`http://localhost:8080/users/`, config)
        .then((response) => {
            this.props.handleFormSubmitBool(true, JSON.stringify(response))
        })
        .catch((response) => {
            this.props.handleFormSubmitBool(false, JSON.stringify(response))
        });
    }
    
    clickSubmit (event) {
        alert("Sohil")
        event.preventDefault();
        const data = new FormData(event.target);
        this.handleSubmitValidation(data)
    }

    handleSubmitValidation (data) {
        /*let isValidForm = false,
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
        */
        this.setState({
          "validForm": true,
          "formErrorMsg": "",
          "formData":data
        });
    }
    convertToJson() {
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        return JSON.stringify(object)
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


    render() {
        return(
            <div>
                <h2>Basic personl details</h2>

                <form onSubmit={(e) => this.clickSubmit(e)} >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="text" className="form-control error"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="text" className="form-control error"></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input type="radio" name="gender" id="male" />Male
                        <input type="radio" name="gender" id="female" />Female
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input id="dob" name="dob" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input id="address" name="address" type="text" className="form-control error"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="occupation">Occupation</label>
                        <input id="occupation" name="occupation" type="text" className="form-control error"></input>
                    </div>

                    <center>
                        <input type="submit" value="Submit" className="btn btn-primary text-center"></input>
                    </center>
                </form>
            </div>
        );
    }
}

export default BasicDetailForm;