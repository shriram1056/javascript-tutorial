// Date

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturtday',
];

const date = new Date();
// const date = new Date('1/12/2004'); (new (year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number))
const month = date.getMonth();
console.log(months[month]); // getmonth and day return index

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

document.body.innerHTML = sentence;
