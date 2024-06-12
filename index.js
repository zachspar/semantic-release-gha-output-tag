import { setOutput } from '@actions/core';

function verifyRelease(_pluginConfig, { nextRelease }) {
  setOutput("tag", nextRelease.gitTag);
}

export default {
  verifyRelease,
};
