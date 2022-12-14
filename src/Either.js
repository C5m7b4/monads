const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  toString: `Right(${x})`,
});

const Left = (x) => ({
  chain: () => Left(x),
  map: () => Left(x),
  fold: (f, g) => f(x),
  toString: `Left(${x})`,
});

export { Right, Left };
