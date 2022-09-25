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

export { exercise1 };
