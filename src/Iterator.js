function iterator(arr) {
  let i = 0;
  const inner = {
    next: function () {
      const val = arr[i];
      i++;
      return val;
    },
  };
  return inner;
}

export { iterator };
