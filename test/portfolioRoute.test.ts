import request from 'supertest';
import app from '../src/app';

describe('GET /api/v1/portfolio/performance', () => {
  it('should return portfolio data for a valid request', async () => {
    const response = await request(app).get(
      '/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000'
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      initialInvestment: 10000,
      currentValue: 16000,
      profitOrLoss: 6000,
      percentageChange: 60,
      performanceSummary: 'Excellent performance! Your investments are doing great.'
    });
  });

  it('should return no change message when values are equal', async () => {
    const response = await request(app).get(
      '/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10000'
    );

    expect(response.status).toBe(200);
    expect(response.body.performanceSummary).toBe(
      'No change. Your portfolio is holding steady.'
    );
  });

  it('should return an error for invalid query values', async () => {
    const response = await request(app).get(
      '/api/v1/portfolio/performance?initialInvestment=0&currentValue=abc'
    );

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: 'initialInvestment must be greater than 0 and currentValue must be a valid number'
    });
  });
});