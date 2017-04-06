require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert
// const VendingMachine = require('../vendingMachine').default
const Person = require('../person').default

describe('Person', () => {
  const person = new Person("Alex", 500)

  it('should start with 500 credits', () => {
    assert.equal(person.state.credits, 500)
  });

  it('should insert money and have the amount deducted from credits', () => {
    person.insertMoney(100)
    assert.equal(person.state.credits, 400)
  })

  it('should be able to make a selection', () => {
    person.makeSelection('A1')
    assert.equal(person.state.choice, 'A1')
  });

})
