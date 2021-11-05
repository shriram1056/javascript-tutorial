// call - runs instantly, arguments - list of items
//apply- runs instantly, arguments - array of items
//both are same they only differ in how arguments are passed

//Context: Context is related to objects. It refers to the object to which a function belongs. When you use the JavaScript “this” keyword, it refers to the object to which function belongs. For example, inside of a function, when you say: “this.accoutNumber”, you are referring to the property “accoutNumber”, that belongs to the object to which that function belongs.


const john = {
  name: 'john',
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  },
};
const susan = {
  name: 'susan',
  age: 21,
};

// john.greet();

// the below will fail
// susan.greet(); no greet in method
// greet();
// const secondGreet = john.greet(); this throws a error since function is being called here.fix:john.greet
// secondGreet();

function greet(city,country) {
  console.log(this);//this refers to window in this case
  console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old,i live in ${city},${country}`);
}

greet.call(john);//specify the this in greet above.so, this looks up for property in the objects passed in call method
greet.call(susan,"chennai",'india');//the first argument will be this reference and next will be object argument
greet.call({ name: 'peter', age: 30 },"chennai",'india');//can also pass object like this

greet.apply(john,["chennai",'india']);
greet.apply({ name: 'peter', age: 30 },["chennai",'india']);

//bind-assign it and use it laster. The bind() method creates a new function, when invoked, has the this sets to the provided value.
const secondGreet = greet.bind(john,'toronto','ca'); //this doesn't throw error like in line 23
const thirdGreet = greet.bind(john)
secondGreet();
thirdGreet();