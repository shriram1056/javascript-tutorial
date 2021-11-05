// this
// if a method from an object is called from that object's variable this keyword works
//this only looks for surrounding scope around the function
//in most cases we pass reference to objects
const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function () {
    console.log(this);
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: 'peter',
  lastName: 'sanders',
  fullName: function (Name) {
    console.log(this);
    console.log(Name)
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName();
bob.fullName("name");
