// global name space / hard to navigate

import { random, people } from './utils/data.js'; //{itemname1,itemname2} from './sa/dsd.js' item name should match. also, type in script that is in html should have "module". i.e.<script type="module" src="what.js"/>

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join('');
  container.innerHTML = newPeople;
};

btn.addEventListener('click', () => {
  showPeople();
});
