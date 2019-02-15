import React, { Component } from "react";

class ClaimPage extends Component {
render() {
return (
<div>
  <div className="container">
    <center>
      <h1 className="cu_title">SUBMIT CLAIM REQUEST</h1>
    </center>
    <div className="header-popup__content">
      <div id="claim-step-form" className="contactus contactus--email collapse-hide active">
        <h5 className="cu_title_sub">We hope every thing is fine.</h5>
        <form id="claim-form" method="POST" action="">
          <div className="input_group"><label className="w--label">What is this claim for</label>
            <div className="input_wrapper"><input type="text" id="subject-input" placeholder="e.g. claim request for car number MH02BX77"
                name="name" /></div>
            <div className="w--error hide">We can’t proceed without knowing what this claim is for. Help us?</div>
          </div>
          <div className="input_group"><label className="w--label">Tell us what happened</label>
            <div className="w--textarea"><textarea name="message" id="message-input" cols="40" placeholder="Please enter whatever details you can provide for us to get started immediately"></textarea></div>
            <div className="w--error hide">Sigh. We unfortunately can’t proceed without knowing what happened. Help us?</div>
          </div>
          <div className="input_group"><label className="w--label">Please provide your mobile number on which we can call you</label>
            <div className="mobile_no_container"><span>+91</span>
              <div className="input_wrapper"><input type="tel" maxLength="10" id="number-input" name="mobile-num"
                  placeholder="Enter your mobile number here" /></div>
            </div>
            <div className="w--error hide">We can’t proceed without your mobile number. Help us?</div>
          </div><button type="submit" className="w--button w--button--orange">Register Claim</button>
        </form>
        <div className="claim_info__msg">If its an emergency, for immediate assistance please feel free to contact our <br
            className="hidden-xs" /> Customer Support Unit
          for Car and Bike insurance claims. <br/><br/> For Health, Travel and Term insurance claim, please contact us</div>
      </div>
      <div id="claim-thanks" className="contactus contactus--thanku collapse-hide">
        <h5 className="cu_title">THANKS!</h5>
        <p>Your Claim Assistance request has been registered with us.</p>
        <p id="claim-success-msg" className="text_orange">We will contact you before 11am tomorrow.</p>
        <div className="claim_info__msg text-left">If its an emergency, for immediate assistance please feel free to
          contact our<br className="hidden-xs" /> Customer Support Unit
          for Car and Bike insurance claims. <br /><br /> For Health, Travel and Term insurance claim, please contact us
          </div>
      </div>
    </div>

  </div>
</div>
);
}
}

export default ClaimPage;