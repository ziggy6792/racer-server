import 'reflect-metadata';
import config from 'src/config/config';

const main = () => {
  console.log(`hello ${config.hello}`);
};

main();
