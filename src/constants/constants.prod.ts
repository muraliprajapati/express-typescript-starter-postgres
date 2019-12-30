import { AppEnv } from '../types/app-env';

const prodEnvVars: AppEnv = {
  logs: 'production',
  corsOptions: {
    origin: (origin: string, callback: (error?: Error, result?: any) => void) => {
      const whiteList = ['localhost', 'chrome-extension'];
      const index = whiteList.findIndex((anIP) => origin.includes(anIP));
      if (!origin || index !== -1) {
        callback(null, true);
      } else {
        callback(new Error(`ORIGIN: '${origin}' Not allowed by CORS`));
      }
    },
    credentials: true,
  },
};
export default prodEnvVars;
