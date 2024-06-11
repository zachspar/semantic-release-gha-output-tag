const core = require('@actions/core');

function verifyRelease(_pluginConfig, { nextRelease }) {
  core.setOutput("tag", nextRelease.gitTag);
}

module.exports = {
  verifyRelease,
};
