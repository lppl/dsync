import { assert } from './utils';
import { existsSync } from 'fs';

const enum Descriptions {
  localDirectory = 'Local directory with projects. Defaults to env variable DSYNC_LOCAL',
  serverDirectory = 'Server directory with projects. Defaults to env variable DSYNC_SERVER',
}

const enum IncorrectOptions {
  noLocalDirectory = 'Directory {dir} does not exist. Add valid option --local_directory or env.DSYNC_LOCAL',
  noServerDirectory = 'Directory {dir} does not exist. Add valid option --server_directory or env.DSYNC_SERVER',
}

export const options = [
  {
    name: 'local_directory',
    defaultValue: process.env.DSYNC_LOCAL,
    description: Descriptions.localDirectory,
    init: (dir: string) => {
      assert(existsSync(dir), IncorrectOptions.noLocalDirectory, { dir });
      return dir;
    },
  },
  {
    name: 'server_directory',
    defaultValue: process.env.DSYNC_SERVER,
    description: Descriptions.serverDirectory,
    init: (dir: string) => {
      assert(existsSync(dir), IncorrectOptions.noServerDirectory, { dir });
      return dir;
    },
  },
];

export type Options = {
  localDirectory: string;
  serverDirectory: string;
};
