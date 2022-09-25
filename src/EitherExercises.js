const eitherex1 = () => {
  const findColor = (name) =>
    ({ red: '#ff4444', blue: '#3b5988', yellow: '#fff68f' }[
      name
    ]);

  const res = findColor('red').toUpperCase();
  console.log(res);
};

export { eitherex1 };
