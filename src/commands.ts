import path from 'path';
import { assert } from './utils';
import { existsSync } from 'fs';
import { dsync } from './dsync';

export async function write({
  project,
  localDirectory,
  serverDirectory,
}: {
  localDirectory: string;
  serverDirectory: string;
  project: string;
}) {
  const source = path.join(localDirectory, project);
  const destination = path.join(serverDirectory, project);

  assert(existsSync(source), 'Project does not exist. Looked at {source}.', {
    source,
  });

  await dsync({ source, destination });
}

export async function read({
  project,
  localDirectory,
  serverDirectory,
}: {
  localDirectory: string;
  serverDirectory: string;
  project: string;
}) {
  const destination = path.join(localDirectory, project);
  const source = path.join(serverDirectory, project);

  assert(existsSync(source), 'Project does not exist. Looked at {source}.', {
    source,
  });

  await dsync({ source, destination });
}
