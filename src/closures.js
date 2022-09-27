function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const curriedAdd = (x) => {
  return (y) => {
    return x + y;
  };
};

export { counter, curriedAdd };
