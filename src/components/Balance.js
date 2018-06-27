import React from 'react';

const Balance = props => {
    return(
        <div className='balance-div'> 
            <h4>{props.title}</h4>
            <p>{props.balance} €</p>
        </div>
    );
}
export default Balance; 