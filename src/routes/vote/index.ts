import { Router, Request, Response } from 'express';

const router = Router();

//Obter informações dos Valores de Likes & Dislikes
router.get('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Adiciona Likes/Dislikes
router.post('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Substitui Likes & Dislikes
router.put('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

export default router;
