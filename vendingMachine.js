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
