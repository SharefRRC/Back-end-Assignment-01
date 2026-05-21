"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const portfolioPerformance_1 = require("../src/portfolio/portfolioPerformance");
describe('calculatePortfolioPerformance', () => {
    it('should return excellent performance for 30 percent gain', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 13000);
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 13000,
            profitOrLoss: 3000,
            percentageChange: 30,
            performanceSummary: 'Excellent performance! Your investments are doing great.'
        });
    });
    it('should return solid gain for 10 percent gain', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 11000);
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 11000,
            profitOrLoss: 1000,
            percentageChange: 10,
            performanceSummary: 'Solid gain. Keep monitoring your investments.'
        });
    });
    it('should return no change for equal values', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 10000);
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 10000,
            profitOrLoss: 0,
            percentageChange: 0,
            performanceSummary: 'No change. Your portfolio is holding steady.'
        });
    });
    it('should return minor loss for negative ten percent', () => {
        const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(10000, 9000);
        expect(result).toEqual({
            initialInvestment: 10000,
            currentValue: 9000,
            profitOrLoss: -1000,
            percentageChange: -10,
            performanceSummary: 'Minor loss. Stay calm and review your options.'
        });
    });
});
