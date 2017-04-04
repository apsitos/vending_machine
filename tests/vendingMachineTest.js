require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
const VendingMachine = require('../vendingMachine').default
const Person = require('../person').default

describe('Vending Machine', function() {
  const vendingMachine = new VendingMachine()
  const alex = new Person("Alex", 500)

  afterEach(function() {
    vendingMachine.reset();
  });

  it('should take a users credits and check for change', () => {
    // Assert the current status of the vendingMachine is idle
    assert.equal(vendingMachine.state.status, 'idle')

    // Alex inserts a dollar into the vending machine
    vendingMachine.insertCredit(alex, 100)

    // Assert the current status of the vendingMachine is 'credited' after credits inserted
    assert.equal(vendingMachine.state.status, 'credited')
    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(vendingMachine.state.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(vendingMachine.state.change, 0)
  });

});
