// eslint-disable-next-line no-undef
module.exports = {
  extends: '../../release.config.js',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [{ scope: 'components', release: true }],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
        }
      }
    ]
  ]
};
