import { Client } from 'pg';
import AsyncRetry from 'async-retry';
import logger from '@logger';

/*
  How to use:
    import PostgresClient from './postgres.repository';
    const db = await PostgresClient.getConnection();
    const queryText = `SELECT * FROM USERS`;
    const dbRes = db.query(queryText);
*/

export default class PostgresRepository {
  private static db: Client = null;

  public async connect(): Promise<any> {
    await AsyncRetry(
      async (bail) => {
        logger.info('Connecting to PostgresDB');
        const client = new Client();

        return new Promise((resolve, reject) => {
          client
            .connect()
            .then(() => {
              logger.info('Connected to PostgresDB');
              PostgresRepository.db = client;
              // Uncomment the following lines to log queries.
              // <- start
              // const oldQuery = PostgresRepository.db.query;
              // PostgresRepository.db.query = (...args: any) => {
              //   console.log('QUERY:', args[0]);
              //   return oldQuery.apply(PostgresRepository.db, args);
              // };
              // <- end
              resolve(client);
            })
            .catch((e) => {
              logger.info('Failed to connect to PostgresDB', e);
              reject(e);
            });
        });
      },
      {
        retries: 100,
        factor: 2,
      }
    );
  }

  public static async getConnection(): Promise<Client> {
    if (!PostgresRepository.db) {
      try {
        const pgClient = new PostgresRepository();
        await pgClient.connect();
      } catch (error) {
        logger.info('error in database connection all retries failed');
      }
    }
    return PostgresRepository.db;
  }

  public disconnect(): void {
    if (PostgresRepository.db) {
      PostgresRepository.db.end();
    }
  }
}
