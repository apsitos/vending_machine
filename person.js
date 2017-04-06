export default class Person {
  constructor() {
    // each person starts out with 5 dollars
    this.state = {
      credits: 500,
      payment: 0,
      choice: ''
    }
  };

  insertMoney(price) {
    this.state.credits -= price
  };

  makeSelection(choice) {
    this.state.choice = choice
  };

  receiveChange(money) {
    this.state.credits += money
  };

};
