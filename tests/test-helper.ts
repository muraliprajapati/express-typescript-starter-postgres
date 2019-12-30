import { MongoClient } from './import-helper';

export const initDB = async () => {
  try {
    const dbClient = new MongoClient();
    const dbInstance = await dbClient.connect();
    console.log(`Connected to DB...`);
  } catch (error) {
    console.log(`Failed to connect to DB...`);
  }
};

export const disconnectDB = async () => {};

export const authorizeRequestAs = (user: {}) => {};
