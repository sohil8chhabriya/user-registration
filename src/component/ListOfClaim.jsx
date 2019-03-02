import React, { Component } from "react";

class ListOfClaim extends Component {
    render() {
        const { claimList } = this.props;
        return(
            <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>

                        <th>claimId</th>
                        <th>claimAmount</th>
                        <th>Amount Disburse</th>
                        <th>dateOfClaim</th>
                        <th>dateOfFullClaimDisburse</th>
                        <th>claimDocumentsCopies</th>

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
                    {claimList.map((claim, index) => (
                        <tr key={index}>
                            <td>{index}</td>

                            <td>{claim.claimId}</td>
                            <td>{claim.claimAmount}</td>
                            <td>{claim.claimAmountDisburse}</td>
                            <td>{claim.dateOfClaim}</td>
                            <td>{claim.dateOfFullClaimDisburse}</td>
                            <td>{claim.claimDocumentsCopies}</td>

                            <td>{claim.policy.policyId}</td>
                            <td>{claim.policy.premiumAmount}</td>
                            <td>{claim.policy.isPremiumPaid}</td>
                            <td>{claim.policy.policyStartDate}</td>
                            <td>{claim.policy.policyEndDate}</td>
                            <td>{claim.policy.isPolicyLappsed}</td>
                            <td>{claim.policy.isPolicyDisabled}</td>
                            <td>{claim.policy.dateOfPurchasess}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    }
}

export default ListOfClaim;