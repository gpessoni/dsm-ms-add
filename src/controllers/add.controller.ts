import { Request, Response, RequestHandler } from 'express';

export const addNumbers: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ error: "Parâmetros inválidos" });
        return;
    }

    const result = a + b;
    res.json({ result });
}; 