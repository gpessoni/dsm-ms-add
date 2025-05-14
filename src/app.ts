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

// Handler para a Vercel com tratamento de erro
const handler = async (req: VercelRequest, res: VercelResponse) => {
  try {
    return await app(req, res);
  } catch (error) {
    console.error('Erro na função serverless:', error);
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      message: error instanceof Error ? error.message : 'Erro desconhecido'
    });
  }
};

export default handler;