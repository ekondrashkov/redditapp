/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  // preset: 'ts-jest/presets/js-with-ts', - если используем не tsx а jsx
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css)': 'identity-obj-proxy'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
};