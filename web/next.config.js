const withTM = require("next-transpile-modules")(["ui"]);

const pkg = require("./package.json");

const commitHash = require("child_process")
  .execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

module.exports = withTM({
  swcMinify: true,
  reactStrictMode: true,
  env: {
    APP_VERSION: pkg.version,
    COMMIT_HASH: commitHash,
  },
});
