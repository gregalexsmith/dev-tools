import { gt } from 'semver';
import { execShell, paths } from '../../helpers';
import { getRemoteVersion } from './get-remote-version';

export const publish = async () => {
  try {
    const localPackageJson = await import(paths.appPackageJson);
    const { name, version, scripts } = localPackageJson;
    const remoteVersion = await getRemoteVersion(name);
    const shouldPublish = gt(version, remoteVersion);

    console.log(
      `local: ${version} remote: ${remoteVersion} shouldPublish: ${shouldPublish}`
    );

    if (!shouldPublish) return console.log('Not Publishing');

    if (scripts.build) {
      console.log(`Building ${name} ...`);
      await execShell('npm run build', { shouldLog: true });
    }

    console.log(`Publishing ${name} ...`);
    if (!process.env.NPM_AUTH_TOKEN) throw new Error('Midding NPM Auth Token');
    await execShell('npm publish', { shouldLog: true });
  } catch (error) {
    console.log('caught error', error);
    process.exit(1);
  }
};
