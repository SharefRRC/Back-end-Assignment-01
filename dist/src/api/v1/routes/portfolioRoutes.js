"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const portfolioPerformance_1 = require("../../../portfolio/portfolioPerformance");
const router = (0, express_1.Router)();
router.get('/portfolio/performance', (req, res) => {
    const initialInvestment = Number(req.query.initialInvestment);
    const currentValue = Number(req.query.currentValue);
    if (Number.isNaN(initialInvestment) ||
        Number.isNaN(currentValue) ||
        initialInvestment <= 0) {
        return res.status(400).json({
            error: 'initialInvestment must be greater than 0 and currentValue must be a valid number'
        });
    }
    const result = (0, portfolioPerformance_1.calculatePortfolioPerformance)(initialInvestment, currentValue);
    return res.status(200).json(result);
});
exports.default = router;
