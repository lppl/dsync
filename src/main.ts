#!/usr/bin/env node

import args from 'args';
import { createConfig, options } from './options';
import { read, write } from './commands';
import { examples } from './examples';

const app = args
  .options(options)
  .examples(examples)
  .command('read', 'Fetches files', (name, [project], options) => {
    read(createConfig({ project, ...options }));
  })
  .command('write', 'Writes files', (name, [project], options) => {
    write(createConfig({ project, ...options }));
  });

app.parse(process.argv);
