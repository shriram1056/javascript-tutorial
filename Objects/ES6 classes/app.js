//classes
class Account {
  static fuck = 'vwvwrv'
  constructor(name, initialBalance) {
    this.name = name
    this.balance = initialBalance
    //methods and property in constructor will need to take values from users
  }
  //properties outside constructor will be in object
  bank = 'Chase'
  //method outside constructor will be in prototype property
  deposit(amount) {
    this.balance += amount
    console.log(`Hello ${this.name}, your balance is ${this.balance}`)
  }
  // don't forget getter and setter
}

// const john = new Account('john', 0)
// console.log(john)
// console.log(john.name)
// john.deposit(500)
// console.log(john.bank)

const bob = new Account('bob', 700)
console.log(bob)
// console.log(bob.name)
// bob.deposit(1000)
// console.log(bob.bank)
