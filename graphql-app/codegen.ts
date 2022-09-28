import type { CodegenConfig } from '@graphql-codegen/cli';

export const config: CodegenConfig = {
  overwrite: true,
  //   watch: true,
  verbose: true,
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
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
