import React from 'react';

const ExpensesIncomesDisplayer = props => {
    return(
            <div className={props.myClassName1}>
                <ul>
                    <h2>{props.title}</h2>
                    {props.accountArr.map((element,index) => <li key={index}>                                                                 
                                                                <span>{element.description}</span>
                                                                <span>{element.amount} €</span>
                                                                <span>{element.date}</span>
                                                            </li>
                                        )} 
                </ul>
            </div>

    );
}
export default ExpensesIncomesDisplayer;