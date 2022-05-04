import React, { Component } from 'react';
import EarningsHeaderComponent from './EarningsHeaderComponent';
import DatePicker from 'react-datepicker';
import EarningsService from '../../services/EarningsService';

class EarningsAddComponent extends Component {

    constructor(props){
        super(props)
        this.state ={
            earningType : 'SALARY',
            earningSource : '',
            earningYear :'',
            earningMonth : '',
            earningAmount : '',
            earningDate : new Date()      
        }

        this.changeEarningTypeHandler = this.changeEarningTypeHandler.bind(this);
        this.changeEarningSourceHandler = this.changeEarningSourceHandler.bind(this);
        this.changeEarningAmountHandler = this.changeEarningAmountHandler.bind(this);
        this.changeEarningDateHandler = this.changeEarningDateHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    saveOrUpdateEmployee = (e)=>{
        e.preventDefault();

        let earning ={
            earningType : this.state.earningType,
            earningSource : this.state.earningSource,
            earningYear : this.state.earningYear,
            earningMonth : this.state.earningMonth,
            earningAmount : this.state.earningAmount,
            earningDate : this.state.earningDate

        }
        console.log(this.props)
        console.log('********')
        console.log(this.props.history)
        console.log('********')
        EarningsService.createEarning(earning).then(res=>{
            this.props.history.push('/earnings');
        });
        console.log(JSON.stringify(earning))
    }

    cancel(){
        this.props.history.push('/earnings');
    }

    changeEarningTypeHandler= (event) => {
        this.setState({earningType: event.target.value});
    }

    changeEarningSourceHandler= (event) => {
        this.setState({earningSource: event.target.value});
    }

    changeEarningAmountHandler= (event) => {
        this.setState({earningAmount: event.target.value});
    }

    changeEarningDateHandler= (date) => {
        console.log("YEAR MONTH")
        let date1 = new Date(date);  // 2009-11-10
        let month = date1.toLocaleString('default', { month: 'long' });
        let year = date1.toLocaleString('default', { year: 'numeric' });
        this.setState({
            earningDate:date,
            earningYear : year,
            earningMonth : month.toLocaleUpperCase()
            });
        console.log(month);
        console.log(year);
        console.log(this.state.earningMonth);

    }

    render() {
        return (
            <div>
                <EarningsHeaderComponent/>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Earning</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Earning Type: </label>
                                            <select value={this.state.earningType}  name="earningType"  required  onChange={this.changeEarningTypeHandler} className="form-control" >
                                                <option value="SALARY">Salary</option>
                                                <option value="OTHER">Other</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Earning Source </label>
                                            <input placeholder="Earning Source" name="earningSource" className="form-control"  required 
                                                value={this.state.earningSource} onChange={this.changeEarningSourceHandler}/>
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Earning Amount: </label>
                                            <input placeholder="Earning Amount" required  name="earningAmount" className="form-control" 
                                                value={this.state.earningAmount} onChange={this.changeEarningAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Earning Date </label>
                                            <DatePicker selected={this.state.earningDate}  required 
                                                        onChange={this.changeEarningDateHandler}
                                                        dateFormat="yyyy-MM-dd" name="earningDate" className="form-control"  />
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default EarningsAddComponent;