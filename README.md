# Playwright Test #

## Getting Started

git clone from `develop` branch

```
git clone git@github.com:FaraziF/playwright-test.git
```

## Installation
Run the command in the directory
```
npm install
```
Playwright install with all browser
```
npx playwright install
```
OR

Playwright install with specific browser
```
npx playwright install --with-deps chromium
```

## Configuration
First thing we need to configure `.env`. We need to create `.env` file in our root directory. Already shared a `.env.example` sample file so just copy & past source code `.env.example` to `.env` and update the configuration.

## Running Test
Run The following command:
```
npm run test:all
```

