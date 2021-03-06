import { CustomModuleLoader } from './custom-module-loader';
import * as tsConfigPaths from 'tsconfig-paths';
import tsConfig from '../tsconfig.json';

// Path aliases work only with TS,
// To resolve aliases present in tsconfig.js after build,
// 'module-alias' package is being used.
if (process.env.NODE_ENV === 'production') {
  let moduleLoader = new CustomModuleLoader();
  console.log('Resolving path aliases for prod build...', process.env.NODE_ENV);
}

// Manually register path aliases for debugging
if (process.env.DEBUG === 'debug') {
  tsConfigPaths.register({
    baseUrl: tsConfig.compilerOptions.baseUrl,
    paths: tsConfig.compilerOptions.paths,
  });
}

import 'reflect-metadata';
import constants from '@constants';
import logger from '@logger';
import app from './config/express';
import PostgresClient from './api/repository/postgres/postgres.repository';

const { port, env } = constants;

app.listen(port, async () => {
  logger.info(`server started on port ${port} (${env})`);
  try {
    const dbClient = new PostgresClient();
    await dbClient.connect();
  } catch (error) {
    logger.info(`Failed to connect to DB`);
  }
});

/**
 * Exports express
 * @public
 */
export default app;
