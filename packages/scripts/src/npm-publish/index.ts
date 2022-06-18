import { gt } from 'semver';
import { execShell } from '../exec-shell';
import { getRemoteVersion } from '../get-remote-version';
import paths from '../paths';

const main = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const localPackageJson = require(paths.appPackageJson);
    const { name, version } = localPackageJson;
    const remoteVersion = await getRemoteVersion(name);
    const shouldPublish = gt(version, remoteVersion);
    console.log(
      `local: ${version} remote: ${remoteVersion} publish: ${shouldPublish}`
    );

    if (!shouldPublish) return console.log('Not Publishing');

    await execShell('npm run build', { shouldLog: true });
    await execShell('npm publish', { shouldLog: true });
  } catch (error) {
    console.log('caught error', error);
  }
};

export default main;
