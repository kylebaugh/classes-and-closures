/* 
  Once you complete a problem, refresh ./classes.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Classes are a tool for building similar objects over and over again.
  They are a construct that helps your organize your code.

  Let's work with some employees at a company.
  You work for Widget Co. They have hundreds of employees.
*/

////////// PROBLEM 1 //////////

/*
  Make a class to help us build all of the employees.
  Each employee has the following properties:
    - first_name
    - last_name
    - email
    - age
  Each employee has the following methods:
    - makeWidget
      - This returns a string equal to the employees first name + last name + the word Widget
      - Example: "Dave Smith Widget"

  Call your class Employee and receive all the data in the constructor in the order listed above.
*/

//Code Here

function Employee(first_name, last_name, email, age){
    this.first_name = first_name,
    this.last_name =last_name,
    this.email = email,
    this.age = age
  }

  Employee.prototype.makeWidget = function(){
    return `${this.first_name} ${this.last_name} Widget`
  }


////////// PROBLEM 2 //////////

/*
  Next, make a manager for Widget Co. that extends Employee
  Each manager has all of the same properties as an employee with the following additional properties:
    - reports (other employees) that defaults to an empty array
  Each manager has the following additional methods:
    - hire (employee)
      - Accepts a new employee as a parameter and pushes it to their list of reports.
    - fire (index)
      - Fire removes employees from their list of reports at the given index

  Call your new class Manager
*/

//Code Here

class Manager extends Employee {
  constructor(first_name, last_name, email, age, reports){
    super(first_name, last_name, email, age)
    this.reports = [];
  }
  hire(report){
    this.reports.push(report)
  }
  fire(index){
      this.reports.splice(index, 1)}
}

////////// PROBLEM 3 //////////

/*
  Managers for Widget Co. get promoted when they get more employees, and get a bonus when they fire employees.
  create a class ProgressiveManager that extends Manager.  A Progressive Manager has all of the same properties as a manager 
  with the following additional properties:
    - title - default 'Not a manager'
    - bonus - default 0

  When employees are hired or fired, the manager's title should be updated based on the number of reports.
    0 reports : Not a manager
    1-3 reports : Barely Manager
    4-10 reports : Mostly Manager
    11-50 reports : Manager
    51-100 reports : Manager Plus
    101+ reports : Bestest Manager

  Everytime they fire an employee they get $100 added to their bonus.

  Call your new class ProgressiveManager
*/

//Code Here

class ProgressiveManager extends Manager{
  constructor(first_name, last_name, email, age, reports, title, bonus){
    super(first_name, last_name, email, age, reports)
    this.title = 'Not a manager'
    this.bonus = 0
  }
  hire(){
    super.hire()
    let asdf = this.reports.length;
      if (asdf === 0){
        this.title = 'Not a manager'
      return this.title}
      else if (asdf > 0 && asdf < 4){
        this.title = 'Barely Manager'
        return this.title}
      else if (asdf > 3 && asdf < 9){
        this.title = 'Mostly Manager'
        return this.title}
      else if (asdf > 10 && asdf < 49){
        this.title = 'Manager'
        return this.title}
      else if (asdf >50 && asdf < 101){
        this.title = 'Manager Plus'
        return this.title}
      else if (asdf > 100){
        this.title = 'Bestest Manager'
        return this.title}
  }
  fire(index){
      this.bonus += 100
  }
}

////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.

  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false

  A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns an anonymous function that is called when the machine is done rebooting
        - The anonymous function should decrease wear_and_tear_count by 10, and set needs_reboot to false
*/

//Code Here


