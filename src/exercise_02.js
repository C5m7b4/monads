import { fromNullable } from './fromNullable';

// const street = (user) => {
//   const address = user.address;

//   if (address) {
//     return address.street;
//   } else {
//     return 'no street';
//   }
// };

const street = (user) =>
  fromNullable(user.address)
    .map((a) => a.street)
    .fold(
      () => 'no street',
      (a) => a.name
    );

export default street;
