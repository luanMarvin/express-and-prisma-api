import { Router, Request, Response } from 'express';

const router = Router();

//Obter informações do Usuário
router.get('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Criar Um novo Usuário
router.post('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Trocar senha de um Usuário
router.patch('/update-password', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Trocar email de um Usuário
router.patch('/update-email', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Trocar username de um Usuário
router.patch('/update-username', (req: Request, res: Response) => {
  res.send('Controller here');
});

//Deleta um Usuário
router.delete('/', (req: Request, res: Response) => {
  res.send('Controller here');
});

export default router;
