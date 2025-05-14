import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import addRoutes from './routes/add.routes';
import healthRoutes from './routes/health.routes';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/add', addRoutes);
app.use('/health', healthRoutes);

export default app; 