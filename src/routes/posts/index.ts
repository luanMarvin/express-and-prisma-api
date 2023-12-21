import { Router, Request, Response } from 'express';

const router = Router();

//Obter informações do Post
router.get('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Criar Um novo Post
router.post('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Trocar username de um Usuário
router.put('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Deleta um Post 
router.delete('/', (req: Request, res: Response) => {
    res.send('Controller here');
});

export default router;
