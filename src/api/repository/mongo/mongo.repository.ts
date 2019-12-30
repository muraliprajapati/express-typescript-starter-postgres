import constants from '@constants';
const { database } = constants;

export default class MongoRepository {
  public connect(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        resolve();
      } catch (error) {
        reject();
      }
    });
  }

  public disconnect(): void {}
}
