// Rest Operator .... same keyword but different function
// gathers/collects the items- it won't work if rest is the only one,it should be preceded by another variable or value

//arrays
const fruit = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...fruits] = fruit;
console.log(first, fruits);

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
// let {  ...rest,job } = person;
// console.log(job, rest);

const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name,...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
