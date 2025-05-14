import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import addRoutes from './routes/add.routes';
import healthRoutes from './routes/health.routes';
import { VercelRequest, VercelResponse } from '@vercel/node';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/add', addRoutes);
app.use('/health', healthRoutes);

export { app };
export const handler = (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};