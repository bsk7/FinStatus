import React, { Component } from 'react';
import EarningsService from '../../services/EarningsService';
import EarningsHeaderComponent from './EarningsHeaderComponent';

class ListEarningsComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            earnings :[]
        }
    }

    componentDidMount(){
        EarningsService.getEarnings().then((res)=>{
            this.setState({earnings:res.data});
        });
    }

    render() {
        return (
            <div>
                <EarningsHeaderComponent/>
                <h2 className='text-center'>Earnings</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Earning ID</th>
                                <th>Earning Type</th>
                                <th>Earning Source</th>
                                <th>Earning Year</th>
                                <th>Earning Month</th>
                                <th>Earning Amount</th>
                                <th>Earning Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.earnings.map(
                                    earning => 
                                    <tr key={earning.earningId}>
                                        <td>{earning.earningId}</td>
                                        <td>{earning.earningType}</td>
                                        <td>{earning.earningSource}</td>
                                        <td>{earning.earningYear}</td>
                                        <td>{earning.earningMonth}</td>
                                        <td>{earning.earningAmount}</td>
                                        <td>{earning.earningDate}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEarningsComponent;