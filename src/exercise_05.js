import { fromNullable } from './fromNullable';

const logIt = (x) => {
  console.log(x);
  return x;
};

//find all developers
const findDevelopers = (e) =>
  fromNullable(e)
    .map((x) => x.filter((y) => y.job === 'developer'))
    .map((x) => x.map((y) => y.name))
    // .map(logIt)
    .map((x) =>
      x.map((y) => y.charAt(0).toUpperCase() + y.slice(1))
    )
    .fold(
      () => [],
      (x) => x
    );

export { logIt, findDevelopers };
