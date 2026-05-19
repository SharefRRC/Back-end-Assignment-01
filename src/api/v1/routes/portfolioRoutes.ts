import { Router, Request, Response } from 'express';
import { calculatePortfolioPerformance } from '../../../portfolio/portfolioPerformance';

const router = Router();

router.get('/portfolio/performance', (req: Request, res: Response) => {
  const initialInvestment = Number(req.query.initialInvestment);
  const currentValue = Number(req.query.currentValue);

  if (
    Number.isNaN(initialInvestment) ||
    Number.isNaN(currentValue) ||
    initialInvestment <= 0
  ) {
    return res.status(400).json({
      error: 'initialInvestment must be greater than 0 and currentValue must be a valid number'
    });
  }

  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  return res.status(200).json(result);
});

export default router;