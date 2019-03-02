import React, { Component } from "react";

class ListOfPolicy extends Component {
    render() {
        const { policyList } = this.props;
        return(
            <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Policy Id</th>
                        <th>Premium</th>
                        <th>Paid Premium ?</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Is Lappsed ?</th>
                        <th>Is Dissabled ?</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>
                <tbody>
                    {policyList.map((policy, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{policy.policyId}</td>
                            <td>{policy.premiumAmount}</td>
                            <td>{policy.isPremiumPaid}</td>
                            <td>{policy.policyStartDate}</td>
                            <td>{policy.policyEndDate}</td>
                            <td>{policy.isPolicyLappsed}</td>
                            <td>{policy.isPolicyDisabled}</td>
                            <td>{policy.dateOfPurchasess}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    }
}

export default ListOfPolicy;