import { ExecError, execShell } from '../../../helpers';

const is404 = (value: string) => value.includes('404');

export const getRemoteVersion = async (name: string): Promise<string> => {
  try {
    const remoteVersion = (await execShell(
      `npm view "${name}" --workspace="../../package.json" version`
    )) as string;

    if (!remoteVersion) {
      throw new Error(`Could not get remote version for ${name}`);
    }

    return remoteVersion.trim();
  } catch (err: unknown) {
    const error = err as unknown as ExecError;

    // if package does not exist yet - throw error
    if (error.stderr && is404(error.stderr)) {
      throw new Error(
        `Package ${name} does not exist yet - publish locally first`
      );
    }

    throw err;
  }
};
