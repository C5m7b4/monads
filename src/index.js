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

import getPort from './excercises_01';
const result = getPort();
console.log(result);
