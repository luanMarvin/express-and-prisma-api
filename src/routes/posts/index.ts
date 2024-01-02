import { Router } from 'express';
import { deletePost, getPost, postPost, putPost } from '../../controllers/posts';

const router = Router();

//Obter informações do Post
router.get('/', getPost);

//Criar Um novo Post
router.post('/', postPost);

//Trocar username de um Usuário
router.put('/', putPost);

//Deleta um Post 
router.delete('/', deletePost);

export default router;
