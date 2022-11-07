module.exports = {
  rootDir: "./",
  preset: "ts-jest",
  verbose: true,

  testEnvironment: "jest-environment-node",
  testMatch: ["<rootDir>/tests/**/(*.)+(spec|test).ts"],

  clearMocks: true,

  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["json", "text"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
