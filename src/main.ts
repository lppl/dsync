#!/usr/bin/env node

import args from 'args';
import { options, Options } from './options';
import { read, write } from './commands';

const app = args
  .options(options)
  .command('read', 'Fetches files', (name, [project], options) => {
    read({ project, ...(options as unknown as Options) });
  })
  .command('write', 'Writes files', (name, [project], options) => {
    write({ project, ...(options as unknown as Options) });
  });

app.parse(process.argv);
