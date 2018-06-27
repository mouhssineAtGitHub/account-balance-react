import React from 'react';

// import Incomes from './Incomes';
// import Expenses from './Expenses';
import ExpensesIncomesDisplayer from './ExpensesIncomesDisplayer';
import Balance from './Balance';


const Account = props => {
    return(
        <div className='account-grid-container'>
            <ExpensesIncomesDisplayer title='Incomes' accountArr={props.incomes} myClassName1='income-div'/>
            <ExpensesIncomesDisplayer title='Expenses' accountArr={props.expenses} myClassName1='expense-div'/>
            <div className='income-total-div'><span className='total-1'>Total Incomes :</span> <span className='total-2'>{props.incomesTotal} €</span> </div>  
            <div className='expense-total-div'><span className='total-1'>Total Expenses :</span> <span className='total-2'>{props.expensesTotal} €</span></div>   
                           
            <Balance title='Balance' balance={props.balance}/>
        </div>
    );
}
export default Account; 