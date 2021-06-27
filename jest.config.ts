export default {
    "roots": [
      "./"
    ],
    "setupFiles": ['<rootDir>/test/__setup__/setupFiles.ts'],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "testEnvironment": 'jest-environment-jsdom',
    "transformIgnorePatterns": ['/node_modules\/'],
}