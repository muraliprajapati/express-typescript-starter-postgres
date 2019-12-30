interface Database {
  uri: string;
  database: string;
}

export interface AppEnv {
  appName?: string;
  env?: string;
  port?: string;
  logs?: string;
  corsOptions?: object;
  database?: Database;
}
