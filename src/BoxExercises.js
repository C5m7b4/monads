import Box from './Box';

const exercise1 = () => {
  console.log('exercise1');
  // const nextCharFromString_ = (str) => {
  //   const trimmed = str.trim();
  //   const number = parseInt(trimmed);
  //   const nextNumber = new Number(number + 1);
  //   return String.fromCharCode(nextNumber);
  // };

  const nextCharFromString = (str) =>
    Box(str)
      .map((x) => x.trim())
      .map((n) => parseInt(n))
      .map((n) => new Number(n + 1))
      .fold((s) => String.fromCharCode(s));

  console.log(nextCharFromString(' 64'));
};

const exercise2 = () => {
  console.log('exercise2');
  const first = (xs) => xs[0];

  // const halfTheFirstLargeNumber_ = (xs) => {
  //   const found = xs.filter((x) => x > 20);
  //   const answer = first(found) / 2;
  //   return `The answer is ${answer}`;
  // };

  const halfTheFirstLargeNumber = (xs) =>
    Box(xs)
      .map((f) => f.filter((x) => x > 20))
      .map((a) => first(a) / 2)
      .fold((x) => `The answer is ${x}`);

  console.log(halfTheFirstLargeNumber([1, 4, 50]));
};

export { exercise1, exercise2 };
