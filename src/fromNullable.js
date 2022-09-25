import { Left, Right } from './Either';

const fromNullable = (x) =>
  x != null ? Right(x) : Left(x);

export { fromNullable };
