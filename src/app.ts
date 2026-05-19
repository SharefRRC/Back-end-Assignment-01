import express from 'express';
import healthRoutes from './api/v1/routes/healthRoutes';
import portfolioRoutes from './api/v1/routes/portfolioRoutes';

const app = express();

app.use(express.json());

app.use('/api/v1', healthRoutes);
app.use('/api/v1', portfolioRoutes);

export default app;