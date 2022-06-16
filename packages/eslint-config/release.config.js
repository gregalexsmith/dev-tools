// eslint-disable-next-line no-undef
module.exports = {
  extends: '../../release.config.js',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [{ scope: 'repo|components', release: false }]
      }
    ]
  ]
};
