module.exports = {
  "roots": [
    "<rootDir>/src",
    "<rootDir>/perf"
  ],
  "testMatch": [
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
