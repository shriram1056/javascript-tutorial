//find- get specific item
//findIndex- get index of item
//every- every item in the array
//some- at least one item

const people =[
  {id:1,name:"john"},
  {id:2,name:"peter"},
  {id:3,name:"anna"},
];
const grades=['A','B','A','B','C'];
const goodGrades=['A','B','A','B'];

const anna = people.find(person=>person.name ==="anna");
console.log(anna.name);

//findIndex
const person = people.findIndex(item =>item.id===3);
console.log(person);//result:2. returns index instead of element

//every
const boolean= people.every(grade => grade !=='C');
console.log(boolean);//result:true. every checks for every item.

//some
const boolean= people.some(grade => grade ==='C');
console.log(boolean);//result:true. some checks for atleast one item.

