import React, { Component } from "react";
import ListOfPolicy from "../../component/ListOfPolicy";

class NewPolicyRequest extends Component {
  constructor(props){
    super(props);
    this.state = { 
        policyList: [],
        isSuccess: false,
        hasError: false,
        showPolicyList: true
    };
  }
  componentDidMount() {
      fetch("http://localhost:8080/policy/fresh")
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  policyList: result,
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
    const { policyList, isSuccess, showPolicyList } = this.state;
    const callStatus = !isSuccess ? "Call Has error" : "Api call Success";
    const policyListRender = showPolicyList ? <ListOfPolicy policyList={policyList} /> : null;
    //const userDetail = showUserDetail ? <UserDetail user={policyLi} /> : null;
    return (
        <div>
            <h1><center>New Policy Applications</center></h1>
            <div className="container">
              {policyListRender}
            </div>
        </div>
    );
  }
}

export default NewPolicyRequest;