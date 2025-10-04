module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testEnvironment: 'jsdom',
    testMatch: [
        '**/tests/unit/**/*.spec.js',
        '**/__tests__/*.spec.js'
    ],
    collectCoverageFrom: [
        'src/**/*.{js,vue}',
        '!src/main.js',
        '!src/router/index.js',
        '!**/node_modules/**'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': 'jest-transform-stub',
        '^axios$': require.resolve('axios')
    },
    transform: {
        '^.+\\.vue$': '@vue/vue2-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.jsx?$': 'babel-jest'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(axios)/)'
    ],
    setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};