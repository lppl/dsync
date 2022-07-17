#!/usr/bin/env node

import args from 'args';
import { options, Options } from './options';
import { read, write } from './commands';
import { examples } from './examples';

const app = args
  .options(options)
  .examples(examples)
  .command('read', 'Fetches files', (name, [project], options) => {
    read({ project, ...(options as unknown as Options) });
  })
  .command('write', 'Writes files', (name, [project], options) => {
    write({ project, ...(options as unknown as Options) });
  });

app.parse(process.argv);
