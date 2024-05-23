module.exports = {
  plugins: {
    '@release-it/bumper': {
      out:
        [
          {
            file: '../../apps/app1/package.json',
            path: 'dependencies.submodule1',
            versionPrefix: 'workspace:',
          },
        ],
    },
  },
  ...require('../../.config/.release-it.cjs'),
}
