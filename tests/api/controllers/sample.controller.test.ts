import { request } from '../../import-helper';
import { initDB, disconnectDB, authorizeRequestAs } from '../../test-helper';
import { defaultHeaders } from '../../test-constants';

const SAMPLE_ROUTE = '/v1/hello';

beforeAll(async () => {
  await initDB();
});

describe('Test Sample Controller', () => {
  describe('A sample controller test case', () => {
    beforeEach(() => {
      authorizeRequestAs({});
    });

    it('should return status 200', async (done) => {
      const res = await request
        .get(`${SAMPLE_ROUTE}`)
        .set(defaultHeaders)
        .send();
      expect(res.status).toEqual(200);
      done();
    });
  });
});

afterAll(async () => {
  await disconnectDB();
});
