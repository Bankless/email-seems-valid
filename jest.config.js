module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.*'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
