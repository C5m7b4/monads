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

const moneyToFloat = (str) =>
  Box(str)
    .map((s) => s.replace(/\$/, ''))
    .map((s) => parseFloat(s))
    .fold((s) => s.toFixed(2));
const exercise3 = () => {
  // const moneyToFloat_ = (str) => {
  //   const n = str.replace(/\$/, '');
  //   return parseFloat(n);
  // };
  console.log('exercise3');
  console.log(moneyToFloat('$5.00'));
};

const percentToFloat = (xs) =>
  Box(xs)
    .map((str) => str.replace(/%/, ''))
    .map((x) => parseFloat(x))
    .fold((x) => x * 0.01);
const exercise4 = () => {
  console.log('exercise4');
  // const percentToFloat_ = (str) => {
  //   const float = parseFloat(str.replace(/%/, ''));
  //   return float * 0.01;
  // };

  console.log(percentToFloat('%20'));
};

const exercise5 = () => {
  console.log('exercise5');
  // const applyDiscount_ = (price, discount) => {
  //   const cents = moneyToFloat(price);
  //   const savings = percentToFloat(discount);
  //   return cents - cents * savings;
  // };
  const applyDiscount = (price, discount) =>
    Box(moneyToFloat(price)).chain((cents) =>
      Box(percentToFloat(discount))
        .map((savings) => cents - cents * savings)
        .map((t) => t.toFixed(2))
        .map((t) => `$${t}`)
        .fold((x) => x)
    );

  console.log(applyDiscount('$5.00', '%20'));
};

export {
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
};
