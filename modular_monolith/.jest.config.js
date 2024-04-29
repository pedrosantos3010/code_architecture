const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
  preset: "ts-jest",
  rootDir: __dirname,
  testEnvironment: "node",
  transform: {
    "^.+.(t|j)sx?$": ["@swc/jest"],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>",
  }),
  clearMocks: true,
  coverageProvider: "v8",
};
