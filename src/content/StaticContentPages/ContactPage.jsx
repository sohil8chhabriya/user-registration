import React, { Component } from "react";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false
    }
  }

  clickSubmit (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var object = {};
    data.forEach(function(value, key){
        object[key] = value;
    });
    var jsonData = JSON.stringify(object);

    const config = {
      method: "POST",
      credentials: "omit",
      headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
      },
      body: jsonData
    }
    fetch(`http://localhost:8080/contact/`, config)
    .then(response => response.json())
    .then(data => this.setState({ isSuccess: true }))
    .catch(data => this.setState({ isSuccess: false }));
  }
render() {
  var { isSuccess } = this.state;
  const contacted = isSuccess ? <p>Message sent.</p> : null;
return (
<div>
  <div className="container">
  <section>
  <div>
    <div className="row">
      <div className="col-sm-12">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div>
              <h2>CONTACT US</h2>
            </div>
            <form data-form-title="CONTACT US" onSubmit={(e) => this.clickSubmit(e)}>
              <input type="hidden" data-form-email="true" />
              <div className="form-group">
                <input type="text" className="form-control" name="name" required placeholder="Name*" data-form-field="Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" required placeholder="Email*" data-form-field="Email" />
              </div>
              <div className="form-group">
                <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" placeholder="Message" required rows="7" data-form-field="Message"></textarea>
              </div>
              <div>
                <button type="submit" className="btn btn-lg btn-danger">CONTACT US</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  {contacted}
  </div>
</div>
);
}
}

export default ContactPage;