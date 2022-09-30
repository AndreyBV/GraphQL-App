import type { CodegenConfig } from '@graphql-codegen/cli';

// Конфиг генератора GraphQL запросов

const config: CodegenConfig = {
  overwrite: true,
  watch: true,
  verbose: true,
  //   debug: true,
  //   errorsOnly: true,
  schema: process.env.PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/**/*.{gql,graphql}',
  generates: {
    // './src/core/models/models-gql.d.ts': {
    //   plugins: ['typescript', 'typescript-resolvers'],
    // },
    './src/core/graphql/generated/gen-gql.ts': {
      //   preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    './src/core/graphql/schema/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
