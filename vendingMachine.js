export default class VendingMachine {
  constructor() {
    // status can be ["idle", "credited", "vending"]
    this.state = {
      status: "idle",
      credits: 0,
      change: 0,
      selection: null,
      qty: 0,
      msg: null
    }
  }

  reset() {
    this.constructor()
  }
}

VendingMachine.prototype.insertCredit = function () {
  this.state.credits+=100
  this.state.status = 'credited'
  if(!this.state.selection) {
    this.state.change = 0
  } else {
    VendingMachine.giveChange()
  }

}
