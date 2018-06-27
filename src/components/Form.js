import React from 'react';

const Form = props => {
    return(
        <div className='form-div' id='form-div'>
            <input type='text' name='description' placeholder='Description' id='description'
                   value={props.description}
                   onChange={props.handleDescriptionChange}
            />
            <input type='number' name='amount'  placeholder='Amount' id='amount' 
                   value={props.amount}
                   onChange={props.handleAccountChange}
            />
            <select value={props.accountType} onChange={props.handleSelectChange}>
                <option value="Income" >Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button onClick={props.addAccountItem}>ADD <i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
    );
}
export default Form; 
