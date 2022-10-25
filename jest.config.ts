import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  modulePaths: ['src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './',
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleNameMapper: {
    '@application/(.*)': '<rootDir>/src/application/$1',
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
};

export default config;
