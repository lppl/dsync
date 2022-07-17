import Rsync from 'rsync';

export const dsync = ({
  source,
  destination,
}: {
  source: string;
  destination: string;
}): Promise<void> => {
  const logBuffer = (buffer: any) => console.log(buffer.toString());
  const rsync = Rsync.build({
    source: `${source}/`,
    destination,
    exclude: ['.git', 'node_modules'],
    output: [logBuffer, logBuffer] as any,
    flags: 'avzu',
    shell: 'ssh',
  });

  console.log('rsync execute >>>', rsync.command());

  return new Promise((resolve, reject) => {
    const pid = rsync.execute((error) => {
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
