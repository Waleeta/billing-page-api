import React, { Component } from "react";
import BillingForm from './BillingForm'

class BillingsContainer extends Component {
    render() {
        return (
            <div>
                <div className="billingsContainer">
                    <BillingForm />
                </div >
            </div>
        )
    }


}

export default BillingsContainer;