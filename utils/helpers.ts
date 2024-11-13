import { Browser, BrowserContextOptions, Page } from '@playwright/test';

const { LOCAL, SITE_PATH } = process.env;

export const helpers = {
  // create env
  createEnvVar(key: string, value: string) {
    console.log(`${key}=${value}`);
    const content = '\n' + `${key}=${value}`;
    process.env[key] = value;
    // this.appendFile('.env', content); // for local testing
  },

  // escape regex
  escapeRegex: (str: string): string => {
    const escapePatten = /[.*+\-?^$|(){}[\]\\]/g; // Special Regex Characters: ., *, +,-, ?, ^, $, |, (, ), {, }, [, ], \, ],
    return str.replace(escapePatten, '\\$&'); // $& means the whole matched string
  },
};
