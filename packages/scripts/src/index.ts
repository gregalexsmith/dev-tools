#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

import minimist from 'minimist';

const main = async () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0];

  if (!cmd) return console.error('Please choose a command');

  switch (cmd) {
    case 'publish':
      (await import('./npm-publish')).default();
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};

main();
