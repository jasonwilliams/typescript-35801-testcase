## Typescript testcase for #35801

## Steps to reproduce

### With the error

- `npm|yarn install` in this project
- once deps are installed run `env NODE_OPTIONS='--stack-trace-limit=10000' yarn webpack --config webpack.config.js`
- Ignore the error "Module Parse Failed", you should see an error that says _INTERNAL ERROR: Cannot read property 'valueDeclaration' of undefined_

### Without the errorr

- Assuming you've done the above.
- in `package.json` change the typescript version to `3.6.4` then `yarn|npm` install
- Run `env NODE_OPTIONS='--stack-trace-limit=10000' yarn webpack --config webpack.config.js` again.
- You should see the error has gone.

### Regression

This breaking-change error was introduced on this commit:
https://github.com/microsoft/TypeScript/commit/29becf05012bfa7ba20d50b0d16813971e46b8a6 and released on version `v3.7-rc`
