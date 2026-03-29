# Developer Guide

## Update OpenAPI

1. Go to the `arnac` project
2. Switch to the `production` branch
3. install FE node modules `(cd frontend && yarn)`
4. Generate the OpenAPI specs `./build.sh -t protoc-derived-sources && ./build.sh -t openapi-file-frontend && (cd frontend && yarn build)`
5. Delete the `src/openapi/` directory from this project
6. Copy the generated OpenAPI output dir from `arnac/frontend/packages/shared/src/openapi` to replace the deleted one here `web3-provider/src/openapi/`
7. Run `yarn cleanup`
8. Run `yarn lint:check` and fix any errors (try `yarn lint:fix`)
9. Run `yarn ts:check` and fix any type errors
10. Run `yarn build` and fix any errors
11. Bump the version in `package.json` manually

- Create a PR with the changes.

## Deploy

1. make sure to be on `main` branch without any changes.
2. make sure the version in `package.json` is the next to deploy.
3. Run `yarn build`

### Beta Release

1. Set the version in `package.json` to the output of `yarn version:beta`
2. Run `yarn publish:dev`
3. Revert the version in `package.json` back to the bumped version

### Latest Release

1. Run `yarn publish:latest`

