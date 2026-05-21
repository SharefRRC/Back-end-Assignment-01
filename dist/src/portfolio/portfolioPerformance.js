"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePortfolioPerformance = calculatePortfolioPerformance;
function calculatePortfolioPerformance(initialInvestment, currentValue) {
    const profitOrLoss = currentValue - initialInvestment;
    const percentageChange = (profitOrLoss / initialInvestment) * 100;
    const performanceSummary = percentageChange >= 30
        ? 'Excellent performance! Your investments are doing great.'
        : percentageChange >= 10
            ? 'Solid gain. Keep monitoring your investments.'
            : percentageChange > 0
                ? 'Modest gain. Your portfolio is growing slowly.'
                : percentageChange === 0
                    ? 'No change. Your portfolio is holding steady.'
                    : percentageChange >= -10
                        ? 'Minor loss. Stay calm and review your options.'
                        : 'Significant loss. Review your portfolio strategy.';
    return {
        initialInvestment: initialInvestment,
        currentValue: currentValue,
        profitOrLoss: profitOrLoss,
        percentageChange: percentageChange,
        performanceSummary: performanceSummary
    };
}
