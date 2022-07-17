import { Options } from './options';
import { execSync } from 'child_process';
import path from 'path';

const fmt = (message: string, replacers: Record<string, unknown>) =>
  Object.entries(replacers).reduce(
    (str, [k, v]) => str.replace(`{${k}}`, JSON.stringify(v)),
    message,
  );

export const assert = (
  predicate: boolean,
  message: string,
  replacers: Record<string, unknown> = {},
) => {
  if (!predicate) {
    throw new Error(fmt(message, replacers));
  }
};
export const local = ({ localDirectory, project }: Options) =>
  path.join(localDirectory, project);

export const server = ({ user, host, serverDirectory, project }: Options) =>
  `${user}@${host}:${path.join(serverDirectory, project)}`;

const serverDirectoryTest = ({
  user,
  host,
  serverDirectory,
  project,
}: Options) => `ssh ${user}@${host} '[ -d ${serverDirectory}/${project} ]'`;

export function assertServerDirectoryExists(options: Options) {
  try {
    execSync(serverDirectoryTest(options), {
      stdio: 'ignore',
    });
  } catch (e) {
    throw new Error(
      `Server directory does not exists. Looked att ${server(options)}`,
    );
  }
}
