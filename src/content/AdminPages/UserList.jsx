import React, { Component } from "react";

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            userList: [],
            isSuccess: false,
            hasError: false
        };
    }
    componentDidMount() {
        fetch("http://localhost:8080/users/")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    userList: result,
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
        const { userList, isSuccess } = this.state;
        //const callStatus = hasError ? "Call Has error" : "Api call Success";
        const callStatus = !isSuccess ? "Call Has error" : "Api call Success";
        return (
            <div>
                <h1><center>Registered User List</center></h1>
                <div className="container">
                    <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Occupation</th>
                                <th>PAN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>{user.dob}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.occupation}</td>
                                    <td>{user.panNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;