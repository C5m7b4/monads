import { fromNullable } from './fromNullable';

// const streetName = (user) => {
//   const address = user.address;

//   if (address) {
//     const street = address.street;

//     if (street) {
//       return street.name;
//     }
//   }
// };

const streetName = (user) =>
  fromNullable(user.address)
    .map((address) => address.street)
    .map((street) => street.name)
    .fold(
      () => 'no street',
      (x) => x
    );

// const streetName = (user) =>
//   fromNullable(user.address)
//     .chain((address) => fromNullable(address.street))
//     .map((street) => street.name)
//     .fold(
//       () => 'no street',
//       (x) => x
//     );

export default streetName;
