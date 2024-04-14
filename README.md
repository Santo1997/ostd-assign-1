# ostd-assign-1

### Bank Account Management Console Application

This JavaScript program simulates a simple bank account management system using Object-Oriented Programming principles.

#### Requirements:

1. Create a `BankAccount` class with the following properties:

   - `accountNumber`: a unique identifier for each account
   - `ownerName`
   - `balance`

2. Implement the following methods in the `BankAccount` class:

   - `deposit(amount)`: Adds the specified amount to the account balance.
   - `withdraw(amount)`: Subtracts the specified amount from the account balance. Ensure that the withdrawal amount does not exceed the available balance. Just show a message in the console: “Insufficient funds” if anyone tries to withdraw more than the available balance.
   - `getBalance()`: Returns the current balance of the account.
   - `displayAccountInfo()`: Displays the account information including account number, owner name, and balance.
