export default class VendingMachine {
  constructor() {
    // status can be ["idle", "credited", "vending"]
    this.state = { status: "idle", credits: 0, change: 0, selection: null }
  }

  reset() {
    this.constructor()
  }
}
