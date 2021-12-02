module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { type: 'build', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'revert', release: 'patch' },
        ],
        parseOpts: {
          mergePattern: /^Merge pull request #(\d+) from (.*)$/,
          mergeCorrespondence: ['id', 'source'],
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          mergePattern: /^Merge pull request #(\d+) from (.*)$/,
          mergeCorrespondence: ['id', 'source'],
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
        presetConfig: {
          types: [
            { type: 'feat', section: ':sparkles: New Features', hidden: false },
            { type: 'fix', section: ':bug: Bug Fixes', hidden: false },
            { type: 'refactor', section: ':zap: Code Refactor', hidden: false },
            { type: 'perf', section: ':fast_forward: Performance', hidden: false },
            { type: 'revert', section: ':hedgehog: Revert', hidden: false },
            { type: 'docs', hidden: true },
            { type: 'style', hidden: true },
            { type: 'test', hidden: true },
            { type: 'build', hidden: true },
            { type: 'ci', hidden: true },
            { type: 'chore', hidden: true },
          ],
        },
      },
    ],
    '@semantic-release/github',
    ['@semantic-release/npm', {}],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        repositoryUrl: 'https://github.com/Leadsales/leadclick',
        githubUrl: 'https://github.com',
        githubApiPathPrefix: '/api/v3/',
        /* eslint-disable no-template-curly-in-string */
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  branches: [
    { name: 'main', prerelease: false },
    { name: 'dev', prerelease: true },
  ],
};
