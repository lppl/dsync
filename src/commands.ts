import { assert, assertServerDirectoryExists, local, server } from './utils';
import { existsSync } from 'fs';
import { dsync } from './dsync';
import { Options } from './options';

export async function write(options: Options) {
  const source = local(options);
  const destination = server(options);

  assert(existsSync(source), 'Project does not exist. Looked at {source}.', {
    source,
  });

  await dsync({ source, destination });
}

export async function read(options: Options) {
  const source = server(options);
  const destination = local(options);

  assertServerDirectoryExists(options);

  await dsync({ source, destination });
}
