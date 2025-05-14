import { Request, Response, RequestHandler } from 'express';

export const healthCheck: RequestHandler = async (_req: Request, res: Response) => {
  const healthData = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    service: 'ms-add',
    version: process.env.npm_package_version || '1.0.0'
  };
  
  res.json(healthData);
}; 