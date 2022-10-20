const request = require('supertest');
const app = require('../server/app.js');
const mongoose = require('mongoose');

describe('Dynamic Files', () => {
    it('/ GET', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });

    it('/ GET HEADERS', async () => {
        const response = await request(app).get('/');
        expect(response.headers['content-type']).toEqual(expect.stringContaining('text/html'));
    });
});

// should receive status code of 200 with login attempt
describe('User Routes', () => {
  describe('Successfull Login', () => {
    it('responds with 200', async () => {
      const response = await request(app).post('/api/user/login').send({
        username: 'mike',
        password: 'microwave',
      });
      expect(response.statusCode).toBe(200);
    });

    it('responds with valid boolean using existing user in database', async () => {
      const response = await request(app).post('/api/user/login').send({
        username: 'mike',
        password: 'microwave',
      });
      const result = JSON.parse(response.text)
      expect(typeof result).toBe('boolean');
    });

    it('responds with valid boolean using existing user in database', async () => {
      const response = await request(app).post('/api/user/login').send({
        username: 'mike',
        password: 'microwavv',
      });
      const result = JSON.parse(response.text)
      expect(typeof result).toBe('boolean');
    });
  });
});

// should receive status code of 200 with adding job attempt
describe('Jobs Routes', () => {
  describe('Existing Application', () => {
    it('responds with 200 status', async () => {
      const response = await request(app).get('/api/jobs/').query({ username: 'mike', status: 'applied' });
      expect(response.statusCode).toBe(200);
    });

    // should return an array object type in response from the getJobsByStatus middleware function
    it('responds with valid boolean using existing user in database', async () => {
      const response = await request(app).get('/api/jobs/').query({ username: 'mike', status: 'applied' });
      const result = Array.isArray(JSON.parse(response.text));
      expect(result).toBe(true);
    });
  });
});

afterAll(() => mongoose.disconnect());