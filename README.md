# semantic-release-gha-output-tag
![NPM Version](https://img.shields.io/npm/v/semantic-release-gha-output-tag)

A semantic release plugin to output git 'tag' in a GitHub Action job step.

| Step               | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `verifyRelease`    | Sets a GitHub Action output variable called `tag` from a workflow step.                      |

## Install

```bash
$ npm install semantic-release-gha-output-tag
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration) or via CLI:

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "semantic-release-gha-output-tag"
  ]
}
```
