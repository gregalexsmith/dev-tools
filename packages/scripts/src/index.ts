#! /usr/bin/env node

import { Command } from 'commander';
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
