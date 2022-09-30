import type { CodegenConfig } from '@graphql-codegen/cli';
import { PATH_GRAPHQL } from './config/graphQl';

// Конфиг генератора GraphQL запросов

const config: CodegenConfig = {
  schema: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  documents: './src/**/*.{gql,graphql}',
  overwrite: true,
  watch: true,
  verbose: true,
  //   debug: true,
  //   errorsOnly: true,
  generates: {
    [PATH_GRAPHQL.TYPES]: {
      plugins: ['typescript'],
    },
    [PATH_GRAPHQL.MAIN]: {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: './types/types.ts',
      },
      //   preset: 'graphql-modules',
      //   presetConfig: {
      //     baseTypesPath: '../generated-types/graphql.ts',
      //     filename: 'generated-types/module-types.ts',
      //   },
      //   preset: 'client',
      plugins: [
        // 'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    [PATH_GRAPHQL.SCHEMA]: {
      plugins: ['introspection'],
    },
    // './src/core/models/models-gql.d.ts': {
    //   plugins: ['typescript', 'typescript-resolvers'],
    // },
  },
};

export default config;
