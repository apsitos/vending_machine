export default class Person {
  constructor() {
    // each person starts out with 5 dollars
    this.state = {
      credits: 500
    }
  }

}

Person.prototype.buyTreat = function () {
  console.log('people');
}
