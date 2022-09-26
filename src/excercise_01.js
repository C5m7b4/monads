import myJson from '../config.json';
import { tryCatch } from './TryCatch';

// const getPort = () => {
//   try {
//     const config = myJson.port;
//     return config;
//   } catch (error) {
//     return 3000;
//   }
// };

const getPort = () =>
  tryCatch(() => myJson.port)
    .map((x) => x)
    .fold(
      () => 8080,
      (x) => x
    );

export default getPort;
