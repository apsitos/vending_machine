# Vending Machine Challenge

## Description
For this challenge, you will be implementing Javascript code to represent an vending machine that accepts money and dispenses treats. While it may seem trivial, you will quickly find out all the nuances of the vending machine world.

We will focus heavily on TDDing and writing clean OO code. This project is required for homework and you will be presenting your work to a panel of expert vending machine code engineers to judge you on the following criteria:
* Code Quality
* Robustness of test suite
* Number of Levels completed

You cannot move on to the next Level unless you have completed the current Level (or made a valiant effort).

### Level 0
* Pencil and paper out the vending process. What kinds of things do you need to keep track of? What is the process flow for selecting, paying and receiving a treat?

### Level 1
* Build two Javascript classes - VendingMachine and Person. A
person should be able to insert their credits (cents) and make a treat selection to the vending machine. The vending machine should be able to keep track of credits, validate the amount of credits is sufficient for selection, retrieve selection to person and dispense change if necessary. For this level, assume all treats cost 75 credits.

I've given you some default state for both Person and VendingMachine, but don't be afraid to add more state.

### Level 2
* Create a test suite that tests the following scenarios:
  * A person inserts 100 credits ($1.00) and selects a treat.
  * A person inserts 50 credits ($0.50) and selects a treat.
  * There should also be a unit test for every VendingMachine method.

### Level 3
* Create a Treat object that includes the following state:
  * Name
  * Price

Think about you want to store treats in the vending machine. How does a real vending machine do it? What would be the best data structure to accurately model reality?

### Level 4
* Add to your test suite that tests the following scenarios:

### Level 5
* Create a git hook at the commit-msg hook to check that all commit messages include 'Level x', where x is the level number you working on.

### Level 6
* Create a DOM representation of the vending machine to visualize the vending process.
