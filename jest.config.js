/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resolver: "<rootDir>/src/jest/resolver.js",
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
};
