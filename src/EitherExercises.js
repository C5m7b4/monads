import { fromNullable } from './fromNullable';

const eitherex1 = () => {
  // const findColor_ = (name) =>
  //   ({ red: '#ff4444', blue: '#3b5988', yellow: '#fff68f' }[
  //     name
  //   ]);

  const findColor = (name) =>
    fromNullable(
      {
        red: '#ff4444',
        blue: '#3b5988',
        yellow: '#fff68f',
      }[name]
    );

  const res = () =>
    findColor('red')
      .map((x) => x.toUpperCase())
      .map((x) => x.slice(1))
      .fold(
        () => 'no color',
        (color) => color
      );

  console.log(res());
};

export { eitherex1 };
