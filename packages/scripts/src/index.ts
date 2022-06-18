#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

import { Command } from 'commander';
// import minimist from 'minimist';

// const main = async () => {
//   const args = minimist(process.argv.slice(2));
//   const cmd = args._[0];

//   if (!cmd) return console.error('Please choose a command');

//   switch (cmd) {
//     case 'publish':
//       break;
//     default:
//       console.error(`"${cmd}" is not a valid command!`);
//       break;
//   }
// };

// main();

const program = new Command();

program.name('development-scripts');

program
  .command('publish')
  .description(
    'Publish a package to npm - checks for a new version and runs build prior to publish'
  )
  .action(async () => {
    (await import('./npm-publish')).default();
  });

program.parse();
