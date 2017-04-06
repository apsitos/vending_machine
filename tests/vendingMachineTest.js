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

  it('should check to see if the machine is on', () => {
    // Assert the current status of the vendingMachine is idle
    assert.equal(vendingMachine.state.status, 'idle')
  })

  it('should take a users credits and check for change', () => {
    // Alex inserts a dollar into the vending machine
    vendingMachine.insertCredit(alex, 100)
    // Assert the current status of the vendingMachine is 'credited' after credits inserted
    assert.equal(vendingMachine.state.status, 'credited')
    // Assert the total number of credits is 100 cents ($1.00) after credits inserted
    assert.equal(vendingMachine.state.credits, 100)
    // Assert the total number of change is 0 cents ($0.00) before selection is made
    assert.equal(vendingMachine.state.change, 0)
  });

  it('should verify that the credits inserted are enough to pay for the treat', () => {
    vendingMachine.insertCredit(alex, 100)
    assert.equal(vendingMachine.state.credits, 100)
    assert.equal(vendingMachine.state.price, 75)
    assert.equal(vendingMachine.state.change, 0)
    vendingMachine.checkPrice()
    assert.equal(vendingMachine.state.msg, 'Change')
  });

  it('should return a message if the credits are not enough', () => {
    vendingMachine.insertCredit(alex, 50)
    assert.equal(vendingMachine.state.credits, 50)
    assert.equal(vendingMachine.state.price, 75)
    vendingMachine.checkPrice()
    assert.equal(vendingMachine.state.msg, 'Please add more credits')
  })

  it('should check the selection entered exists', () => {
    assert.equal(vendingMachine.checkSelection('A1'), true)
  });

  it('should make sure there are enough treats', () => {
    vendingMachine.checkQuantity()
    assert.deepEqual(vendingMachine.state.selection.A1, [1,1,1,1,1,1,1,1,1,1])
  });

  it('should vend the selected treat', () => {
    assert.deepEqual(vendingMachine.state.selection.A1, [1,1,1,1,1,1,1,1,1,1])
    vendingMachine.vend('A1')
    assert.deepEqual(vendingMachine.state.selection.A1, [1,1,1,1,1,1,1,1,1])
  })

  it('should dispense any change needed', () => {
    vendingMachine.insertCredit(alex, 100)
    assert.equal(vendingMachine.state.credits, 100)
    assert.equal(vendingMachine.state.price, 75)
    vendingMachine.checkPrice()
    assert.equal(vendingMachine.state.change, 25)
    assert.equal(vendingMachine.state.msg, 'Change')
    vendingMachine.reset()
    assert.equal(vendingMachine.state.change, 0)
  });

});
