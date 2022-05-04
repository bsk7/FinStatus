import React, { Component } from 'react';
import EarningSummaryComponent from './EarningSummaryComponent';
import EarningsHeaderComponent from './EarningsHeaderComponent';
class EarningsComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
           
        }
    }

    render() {
        return (
            <div>
                <EarningSummaryComponent/>
            </div>
        );
    }
}

export default EarningsComponent;