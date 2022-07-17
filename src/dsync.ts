import Rsync from 'rsync';

export const dsync = ({
  source,
  destination,
}: {
  source: string;
  destination: string;
}): Promise<void> => {
  const rsync = Rsync.build({
    source: `${source}/`,
    destination,
    exclude: ['.git', 'node_modules'],
    flags: 'avzu',
    shell: 'ssh',
  });

  return new Promise((resolve, reject) => {
    const pid = rsync.execute((error, code, cmd) => {
      console.log('rsync executed >>>', cmd);
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });

    const quitting = () => {
      if (pid) {
        pid.kill();
      }
      process.exit();
    };
    process.on('SIGINT', quitting);
    process.on('SIGTERM', quitting);
    process.on('exit', quitting);
  });
};
