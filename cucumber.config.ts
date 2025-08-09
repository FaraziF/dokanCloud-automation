export default {
  default: {
    paths: ['features/*.feature'],
    require: ['features/step_definition/*.js'],
    format: ['@cucumber/pretty-formatter'],
    formatOptions: {
      snippets: 'async-await',
      snippetInterface: 'async-await',
    },
    publishQuiet: true,
    requireModule: ['ts-node/register'],
    worldParameters: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
};
