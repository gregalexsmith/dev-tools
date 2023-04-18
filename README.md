# dev-tools

Developer tools monorepo

## Packages
- [components](./packages/components#readme)
- [eslint-config](./packages/eslint-config#readme)
- [helpers](./packages/helpers#readme)
- [scripts](./packages/scripts#readme)

## Publishing

This repository is configured to use [changesets](https://github.com/changesets/changesets) for managing versions and publishing.
1. Include a changeset in your PR by running `npx changeset` and following the prompts
2. Once your PR is merged, a GitHub Action will automatically create a `[ci] release` PR with the non-released changesets
3. Once the release PR is merged, a GitHub Action will automatically publish the packages to npm