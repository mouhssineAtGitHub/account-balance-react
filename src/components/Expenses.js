import React from 'react';

const Expenses = props => {
    return(
        <ul>
            <h4>{props.title}</h4>
            {props.expenses.map((expense,index) => <li key={index}>{expense.description} {expense.amount}</li>)} 
        </ul>
    );
}
export default Expenses; 