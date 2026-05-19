import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/health', () => {
  it('should return health details', async () => {
    const response = await request(app).get('/api/v1/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(typeof response.body.uptime).toBe('number');
    expect(typeof response.body.timestamp).toBe('string');
    expect(response.body.version).toBe('1.0.0');
  });
});