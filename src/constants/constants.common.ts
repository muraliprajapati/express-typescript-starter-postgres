import { AppEnv } from '../types/app-env';

/**
 * Common constants across all the environments (dev, staging, prod)
 */

const commonEnvVars: AppEnv = {
  appName: 'App',
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    uri: process.env.DB_URI,
    database: process.env.DB_NAME,
  },
};

export default commonEnvVars;
