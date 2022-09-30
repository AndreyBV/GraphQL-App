const process = require('process');
const { GRAPHQL_PATH } = require('./config/graphQl');

// Конфиг для работы расширения Apollo GraphQL
// (автокомплит и хайлайтер для GraphQL файлов с запросами)

module.exports = {
  client: {
    service: {
      name: 'graphql-app',
      localSchemaFile: GRAPHQL_PATH.SCHEMA,
      url: process.env.PUBLIC_GRAPHQL_ENDPOINT,
    },
  },
};
