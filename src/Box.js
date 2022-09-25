const Box = (x) => ({
  map: (f) => Box(f(x)),
  inspect: `Box(${x})`,
  fold: (f) => f(x),
  chain: (f) => f(x),
  toString: `Box(${x})`,
});

export default Box;
