import React, { Component } from 'react';
import ExpensesService from '../../services/ExpensesService';
class ListExpensesComponent extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            expenses :[]
        }
    }
    componentDidMount(){
        ExpensesService.getExpenses().then((res)=>{
            this.setState({expenses:res.data});
        });
    }
    render() {
        return (
            <div>
                 <h2 className='text-center'>Expenses</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Expense ID</th>
                                <th>Expense Year</th>
                                <th>Expense Month</th>
                                <th>Expense Type</th>
                                <th>Expense Amount</th>
                                <th>Expense Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.expenses.map(
                                    expense => 
                                    <tr key={expense.expenseId}>
                                        <td>{expense.expenseId}</td>
                                        <td>{expense.expenseYear}</td>
                                        <td>{expense.expenseMonth}</td>
                                        <td>{expense.expenseType}</td>
                                        <td>{expense.expenseAmount}</td>
                                        <td>{expense.expenseDate}</td>
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

export default ListExpensesComponent;