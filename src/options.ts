import { assert } from './utils';
import { execSync } from 'child_process';

const enum Descriptions {
  localDirectory = 'Local directory with projects. Defaults to env variable DSYNC_LOCAL',
  serverDirectory = 'Server directory with projects. Defaults to env variable DSYNC_SERVER',
  user = 'User. Defaults to env variable DSYNC_USER',
  host = 'Host. Defaults to env variable DSYNC_HOST',
}

const enum IncorrectOptions {
  noLocalDirectory = 'Directory {dir} does not exist. Add valid option --local_directory or env.DSYNC_LOCAL',
  noServerDirectory = 'Directory {dir} does not exist. Add valid option --server_directory or env.DSYNC_SERVER',
  noUser = 'No --user or env.DSYNC_USER',
  noHost = 'No --host or env.DSYNC_HOST',
}

export const options = [
  {
    name: 'local_directory',
    defaultValue: process.env.DSYNC_LOCAL,
    description: Descriptions.localDirectory,
  },
  {
    name: 'server_directory',
    defaultValue: process.env.DSYNC_SERVER,
    description: Descriptions.serverDirectory,
  },
  {
    name: 'user',
    defaultValue: process.env.DSYNC_USER,
    description: Descriptions.user,
  },
  {
    name: 'host',
    defaultValue: process.env.DSYNC_HOST,
    description: Descriptions.host,
  },
];

export const createConfig = ({
  project,
  host,
  user,
  serverDirectory,
  localDirectory,
}: any): Options => {
  assert(Boolean(user), IncorrectOptions.noUser);
  assert(Boolean(host), IncorrectOptions.noHost);
  assert(Boolean(localDirectory), IncorrectOptions.noLocalDirectory, {
    dir: localDirectory,
  });
  assert(Boolean(serverDirectory), IncorrectOptions.noServerDirectory, {
    dir: serverDirectory,
  });

  execSync(`ssh ${user}@${host} '[ -d ${serverDirectory} ]'`, {
    stdio: 'ignore',
  });

  return {
    project,
    user,
    host,
    localDirectory,
    serverDirectory,
  };
};

export type Options = {
  project: string;
  user: string;
  host: string;
  localDirectory: string;
  serverDirectory: string;
};
