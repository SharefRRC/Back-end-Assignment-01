"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe('GET /api/v1/portfolio/performance', () => {
    it('should return portfolio data for a valid request', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/api/v1/portfolio/performance?initialInvestment=10000&currentValue=16000');
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
        const response = await (0, supertest_1.default)(app_1.default).get('/api/v1/portfolio/performance?initialInvestment=10000&currentValue=10000');
        expect(response.status).toBe(200);
        expect(response.body.performanceSummary).toBe('No change. Your portfolio is holding steady.');
    });
    it('should return an error for invalid query values', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/api/v1/portfolio/performance?initialInvestment=0&currentValue=abc');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            error: 'initialInvestment must be greater than 0 and currentValue must be a valid number'
        });
    });
});
