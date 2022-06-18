import { exec } from 'child_process';

type Options = {
  shouldLog: boolean;
};

const defaultOptions = { shouldLog: false };

export interface ExecError extends Error {
  error?: typeof Error;
  stderr?: string;
}

export const execShell = (
  cmd: string,
  { shouldLog }: Options = defaultOptions
) => {
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (stdout) {
        shouldLog && console.log(stdout);
        return resolve(stdout);
      }

      const newError: ExecError = new Error('Error');
      Object.assign(newError, {
        error: error,
        stderr: stderr
      });

      if (error) {
        shouldLog && console.warn('error', error);
        return reject(newError);
      }

      if (stderr) {
        shouldLog && console.warn('stderror', stderr);
        const newError = new Error('Error');
        Object.assign(newError, {
          description: stderr
        });
        return reject(newError);
      }
    });
  });
};
