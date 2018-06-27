import React from 'react';

const Account = props => {
    return(
        <ul>
            <h4>{props.title}</h4>
            {props.incomes.map((income,index) => <li key={index}>{income.description} {income.amount}</li>)} 
        </ul>
    );
}
export default Account; 