console.log('you are ready to start coding...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';
main.appendChild(child);
root.appendChild(main);

// import {
//   exercise1,
//   exercise2,
//   exercise3,
//   exercise4,
//   exercise5,
// } from './BoxExercises';
// exercise1();
// exercise2();
// exercise3();
// exercise4();
// exercise5();

// import { eitherex1 } from './EitherExercises';
// eitherex1();

import getPort from './excercise_01';
import street from './exercise_02';
import streetName from './exercise_03';
const result = getPort();
console.log(result);

const address = { address: { street: { name: 'Willow' } } };
console.log(street(address));

console.log(streetName(address));

import { Right } from './Either';

console.log(
  Right(2).fold(
    () => 'nothing',
    (x) => x
  )
);

const employees = [
  {
    id: 1,
    name: 'mike',
    job: 'developer',
  },
  {
    id: 2,
    name: 'tommy',
    job: 'developer',
  },
  {
    id: 3,
    name: 'tj',
    job: 'retail',
  },
  {
    id: 4,
    name: 'sally',
    job: 'receptionist',
  },
  {
    id: 5,
    name: 'cody',
    job: 'employer',
  },
];

// console.log('developer search');
// import { findDevelopers } from './exercise_05';
// console.log(findDevelopers(employees));

// import { counter, curriedAdd } from './closures';

// const ourCounter = counter();
// console.log(ourCounter());
// console.log(ourCounter());
// console.log(ourCounter());
// console.log(ourCounter());
// console.log(ourCounter());
// console.log(ourCounter());

// const addTwo = curriedAdd(2);

// console.log(addTwo(20));
// console.log(addTwo(10));
// console.log(addTwo(0));

import { iterator } from './Iterator';
console.log('iterators');
const returnNextElement = iterator([4, 5, 6]);
const elem1 = returnNextElement.next();
console.log(elem1);
const elem2 = returnNextElement.next();
console.log(elem2);

const returnNextEmployee = iterator(employees);
const emp1 = returnNextEmployee.next();
console.log(emp1);
const emp2 = returnNextEmployee.next();
console.log(emp2);

console.log('generators');
import { createFlow } from './generator';
const ne = createFlow();
const e1 = ne.next();
console.log(e1.value);
console.log(ne.next().value);
console.log(ne.next().value);
console.log(ne.next().value);
