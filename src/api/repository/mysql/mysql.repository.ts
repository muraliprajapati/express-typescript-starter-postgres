import * as mysql from 'mysql';
import AsyncRetry from 'async-retry';
import logger from '@logger';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my-secret-pw',
});

/*
  How to use:
    import PostgresClient from './postgres.repository';
    const db = await PostgresClient.getConnection();
    const queryText = `SELECT * FROM USERS`;
    const dbRes = db.query(queryText);
*/

export default class MySQLRepository {
  private static db: any = null;

  public async connect(): Promise<any> {
    logger.info('Connecting to PostgresDB');

    return new Promise((resolve, reject) => {
      connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          reject(err);
        }

        console.log('connected as id ' + connection.threadId);
        resolve(connection);
      });
    });
  }

  // public static async getConnection(): Promise<Client> {
  //   if (!PostgresRepository.db) {
  //     try {
  //       const pgClient = new PostgresRepository();
  //       await pgClient.connect();
  //     } catch (error) {
  //       logger.info('error in database connection all retries failed');
  //     }
  //   }
  //   return PostgresRepository.db;
  // }

  public disconnect(): void {
    if (MySQLRepository.db) {
      MySQLRepository.db.end();
    }
  }
}
