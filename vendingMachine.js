const Person = require('./person').default
const person = new Person()

export default class VendingMachine {
  constructor() {
    // status can be ["idle", "credited", "vending"]
    this.state = {
      status: "idle",
      credits: 0,
      change: 0,
      selection: {
        A1: [1,1,1,1,1,1,1,1,1,1],
        A2: [1,1,1,1,1,1,1,1,1,1],
        A3: [1,1,1,1,1,1,1,1,1,1],
        B1: [1,1,1,1,1,1,1,1,1,1],
        B2: [1,1,1,1,1,1,1,1,1,1],
        B3: [1,1,1,1,1,1,1,1,1,1],
        C1: [1,1,1,1,1,1,1,1,1,1],
        C2: [1,1,1,1,1,1,1,1,1,1],
        C3: [1,1,1,1,1,1,1,1,1,1]
      },
      price: 75,
      qty: 0,
      msg: ''
    };
  };

  insertCredit(user, credit) {
    person.insertMoney(credit)
    this.state.credits = credit;
    this.state.status = 'credited'
  };

  checkSelection(choice) {
    return Object.keys(this.state.selection).find(choice => choice = 'A1')? true : false
  };

  checkQuantity(choice) {
    this.state.selection[choice]
  };

  checkPrice() {
    if(this.state.credits >= this.state.price) {
      this.state.change = this.state.credits - this.state.price;
      this.state.msg = 'Change'
    } else {
      this.state.msg = 'Please add more credits'
    };
  };

  vend(choice) {
    this.state.selection[choice].shift()
  }

  reset() {
    this.constructor()
  };
}
