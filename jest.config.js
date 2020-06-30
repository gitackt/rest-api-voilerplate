module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': ['<rootDir>/__test__/$1'],
    '@api/(.*)': ['<rootDir>/src/app/api/$1'],
    '@model/(.*)': ['<rootDir>/src/app/model/$1'],
    '@storage/(.*)': ['<rootDir>/src/app/storage/$1'],
    '@logger/(.*)': ['<rootDir>/src/logger/$1'],
  },
}
