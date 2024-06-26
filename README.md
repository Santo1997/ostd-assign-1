# Project Overview

This project consists of three distinct components:

1. Personal Profile Card
2. Calculator Application with Bootstrap UI
3. Bank Account Management Console Application

Each component is briefly described below along with its requirements.

## 1. Personal Profile Card

### Description
This component is a simple personal profile card created using HTML and CSS. It displays basic information about a person, including their name, occupation, short description, and contact details.

### Features
- Visually appealing profile card design
- Centered both horizontally and vertically on the page
- Customizable text content and styling

### Requirements
To view the profile card, you need a web browser that supports HTML and CSS.

## 2. Calculator Application with Bootstrap UI

### Description
This component is a simple calculator application created using HTML, CSS (Bootstrap for UI), and JavaScript. It allows users to input two numbers and select an arithmetic operation from a dropdown menu. Upon clicking the "Calculate" button, the calculator displays the result of the operation.

### HTML Structure
- Use Bootstrap for creating the UI components (input fields, dropdown menu, button, result display).
- Implement two input fields for entering numbers.
- Include a dropdown menu for selecting arithmetic operations: addition (+), subtraction (-), multiplication (*), and division (/).
- Add a button labeled "Calculate" to trigger the calculation.
- Include a section to display the result of the operation.

### JavaScript Functionality
- Implement a JavaScript function to perform the calculation based on the user input.
- Retrieve the numbers and the selected operation from the input fields and dropdown menu, respectively.
- Handle cases where the user inputs non-numeric data or performs invalid operations gracefully by displaying appropriate error messages.

## 3. Bank Account Management Console Application

### Description
This component is a JavaScript program that simulates a simple bank account management system using Object-Oriented Programming principles.

### Requirements
1. Create a `BankAccount` class with the following properties:
   - `accountNumber`: a unique identifier for each account
   - `ownerName`
   - `balance`
2. Implement the following methods in the `BankAccount` class:
   - `deposit(amount)`: Adds the specified amount to the account balance.
   - `withdraw(amount)`: Subtracts the specified amount from the account balance. Ensure that the withdrawal amount does not exceed the available balance. Just show a message in the console: “Insufficient funds” if anyone tries to withdraw more than the available balance.
   - `getBalance()`: Returns the current balance of the account.
   - `displayAccountInfo()`: Displays the account information including account number, owner name, and balance.
