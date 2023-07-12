import React from "react";
import { Component } from "react";
import axios from "axios";
import { TableHeaderCell } from "semantic-ui-react";
class Expense extends Component {
  state = {
    name: "",
    income: "",
    foods: "",
    entertainment: "",
    savings: "",
    others: "",
    expense: 0,
    balance: 0,
  };
  income = (e) => {
    this.setState({ income: parseInt(e.target.value) });
  };
  foods = (e) => {
    this.setState({ foods: parseInt(e.target.value) });
  };
  entertainment = (e) => {
    this.setState({ entertainment: parseInt(e.target.value) });
  };
  savings = (e) => {
    this.setState({ savings: parseInt(e.target.value) });
  };
  others = (e) => {
    this.setState({ others: parseInt(e.target.value) });
  };
  //on form change and setting expanse
  submit = (e) => {
    e.preventDefault();
    this.setState({
      expense: this.state.entertainment + this.state.foods + this.state.savings + this.state.others,
    });
    if (this.state.name === "") {
      alert("Enter your name to continue");
    }
  };

  //balance setting
  balance = () => {
    if (
      this.state.income > this.state.entertainment &&
      this.state.income > this.state.foods &&
      this.state.income > this.state.savings &&
      this.state.income > this.state.others
    ) {
      this.setState({ balance: this.state.income - this.state.expense });
    } else if (this.state.income === "") {
      alert("Enter the income first");
    } else {
      alert("Expense is more than income:(");
    }
  };
  save = () => {
    alert("Do you want to save your data?");
    if (alert === true) {
      console.log("working");
    }
    const data = {
      name: this.state.name,
      income: this.state.income,
      food: this.state.food,
      entertainment: this.state.entertainment,
      savings: this.state.savings,
      others: this.state.others,
      expense: this.state.expense,
      balance: this.state.balance,

    };
    axios
      .post(
        "https://sheet.best/api/sheets/f66672c1-f6d1-4d36-9235-fb7a659b2154",
        data
      )
      .then((res) => {
        console.log(res);
        alert("data saved");
      });
  };
  render() {
    return (
      <div className="container">
        <h1 className="title">EXPENSES APP</h1>
        <form onSubmit={this.submit} className="form-input">
          <h1>USER NAME</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            required
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <h1>INCOME</h1>
          <input
            type="number"
            placeholder="Enter your income"
            value={this.state.income}
            required
            onChange={this.income}
          />
          <h1>FOODS</h1>
          <input
            type="number"
            placeholder="Enter for  foods"
            value={this.state.foods}
            required
            onChange={this.foods}
          />
          <h1>ENTERTAINMENT</h1>
          <input
            type="number"
            placeholder="Enter money for entertainment"
            value={this.state.entertainment}
            required
            onChange={this.entertainment}
          />
          <h1>SAVINGS</h1>
          <input
            type="number"
            placeholder="Enter money for savings "
            value={this.state.savings}
            required
            onChange={this.savings}
          />
          <h1>OTHERS</h1>
          <input
            type="number"
            placeholder="Enter money for Others"
            value={this.state.others}
            required
            onChange={this.others} />
          <button className="buttons-name" id="sub">
            submit
          </button>
        </form>
        2
        <div className="buttons">
          <div>
            <h1>{`Your expense is :${this.state.expense}`}</h1>
          </div>
          <div>
            <button id="btn-3" onClick={this.balance} className="buttons-name">
              get balance
            </button>
            <h1>{`Your balance is :${this.state.balance}`}</h1>
          </div>
          <div>
            <button id="btn-2" onClick={this.save} className="buttons-name">
              click to save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Expense;