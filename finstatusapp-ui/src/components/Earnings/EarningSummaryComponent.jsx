import React, { Component } from 'react';
import EarningsHeaderComponent from './EarningsHeaderComponent';
class EarningSummaryComponent extends Component {

    constructor(props){
        super(props)
        this.state ={
           
        }
    }

    render() {
        return (
            <div>
                 {console.log(this.props)}
                {console.log(this.props.history)}
                <EarningsHeaderComponent/>
                <h1>Summary</h1>
            </div>
        );
    }
}

export default EarningSummaryComponent;