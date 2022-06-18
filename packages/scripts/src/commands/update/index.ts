// eslint-disable-next-line import/no-named-as-default
import prompts from 'prompts';
import { execShell } from '../../helpers';

const publishedPackages = ['components', 'eslint-config'];
const bumpTypes = ['major', 'minor', 'patch'];

export const update = async () => {
  const { packageName } = await prompts([
    {
      type: 'select',
      name: 'packageName',
      message: 'Choose a package',
      choices: publishedPackages.map((val) => ({
        title: val,
        value: `@gregalexsmith/${val}`
      }))
    }
  ]);

  console.log(packageName);

  const { updateType } = await prompts([
    {
      type: 'select',
      name: 'updateType',
      message: 'Choose an update type',
      choices: bumpTypes.map((val) => ({ title: val, value: val }))
    }
  ]);

  await execShell(`npm version ${updateType} --workspace=${packageName}`, {
    shouldLog: true
  });
};
