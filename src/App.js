import React, { Component } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Account from './components/Account';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      description:'',
      amount:0,
      accountType:'Income',
      incomes:[],
      expenses:[],
      errorMsg:''
    }

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this); 
    this.handleAccountChange = this.handleAccountChange.bind(this); 
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.addAccountItem = this.addAccountItem.bind(this);
    this.getDateTime = this.getDateTime.bind(this);
  }

  handleDescriptionChange(e){
    this.setState({description:e.target.value});
  }

  handleAccountChange(e){
    this.setState({amount:e.target.value});
  }

  handleSelectChange(e){
    this.setState({accountType:e.target.value});
  }

  getDateTime(){    
    let now = new Date();
    let date = Intl.DateTimeFormat('en-US').format(now);
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return date + ' ' + hours + ':' + minutes;
  }
  addAccountItem(){
    const descriptionInput= document.querySelector('#description');
    const amountInput= document.querySelector('#amount');
    const formDiv = document.querySelector('#form-div');
    let msg = '';
    const reg_desc = /^[a-z][ a-z|A-Z]{1,49}$/;

    if (!descriptionInput.value || descriptionInput.value=='' || descriptionInput.value==' ' || !reg_desc.test(descriptionInput.value)){
      msg = ' Check description! ';
    }
    if(!amountInput.value || amountInput.value=='' || amountInput.value==' '){
      msg = msg + ' Check amount! ';
    }
    if(msg !== ''){
      this.setState({errorMsg : msg});
      formDiv.classList.add('invalid');
    }
    else{
      descriptionInput.classList.remove('invalid');
      formDiv.classList.remove('invalid');
      this.setState({errorMsg : ''});

      let arr1 = [...this.state.incomes];
      let arr2 = [...this.state.expenses];
      
      if(this.state.accountType === 'Income'){      
        arr1.push({description : this.state.description, amount : this.state.amount, date : this.getDateTime()});
        this.setState({incomes:arr1});

      }else if(this.state.accountType==='Expense'){
        arr2.push({description : this.state.description, amount : this.state.amount, date : this.getDateTime()});
        this.setState({expenses:arr2});
      }
  }


}


  render() {
    let total1 = 0;
    total1 = this.state.incomes.reduce(function(accumulator, myObj) {
    return accumulator + Number( myObj.amount);}, 0);
    
    let total2 = 0;
    total2 = this.state.expenses.reduce(function(accumulator, myObj) {
      return accumulator + Number( myObj.amount);
    }, 0);

    const balance = total1-total2;
    return (
      <div className='app'>
          <Header title='Account Balance Application' />

          <div className='error-msg-div'>{this.state.errorMsg}</div>

          <Form
            description = {this.state.description}
            account = {this.state.account}
            handleDescriptionChange = {this.handleDescriptionChange}
            handleAccountChange = {this.handleAccountChange}
            handleSelectChange = {this.handleSelectChange}
            addAccountItem = {this.addAccountItem}
          />
          <Account
            incomes={this.state.incomes}
            incomesTotal={total1}
            expenses={this.state.expenses}
            expensesTotal={total2}
            balance={balance}
          />
          
      </div>
    );
  }
}

export default App;
