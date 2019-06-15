import app from '../src/index';
import * as supertest from 'supertest';

describe('app', () => {
    let request;

    beforeEach(() => {
        request = supertest(app);
    });

    it('should return a successful response for GET /', done => {
        const result = request.get('/');
        result.expect(200, done);
    });
});
