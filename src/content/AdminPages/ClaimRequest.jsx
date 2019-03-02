import React, { Component } from "react";
import ListOfClaim from "../../component/ListOfClaim";

class ClaimRequest extends Component {
  constructor(props){
    super(props);
    this.state = { 
        claimList: [],
        isSuccess: false,
        hasError: false,
        showClaimList: true
    };
  }
  componentDidMount() {
      fetch("http://localhost:8080/claim/")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  claimList: result,
                  isSuccess: true
              });
          },
          (error) => {
              this.setState({
                  isSuccess: false
              });
          }
      )
  }
  render() {
    const { claimList, isSuccess, showClaimList } = this.state;
    const callStatus = !isSuccess ? "Call Has error" : "Api call Success";
    const claimListRender = showClaimList ? <ListOfClaim claimList={claimList} /> : null;
    //const userDetail = showUserDetail ? <UserDetail user={policyLi} /> : null;
    return (
        <div>
            <h1><center>New Claim Applications</center></h1>
            <div className="container">
              {claimListRender}
            </div>
        </div>
    );
  }
}

export default ClaimRequest;