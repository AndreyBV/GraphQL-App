// @ts-nocheck
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  //   watch: true,
  //   verbose: true,
  //   debug: true,
  //   errorsOnly: true,
  schema: process.env.PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/**/*.{gql,graphql}',
  generates: {
    'src/graphql/generated': {
      preset: 'client',
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    'config/graphql/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
