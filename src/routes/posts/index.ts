import { Router } from 'express';
import { deletePost, getAllPost, getPost, postPost, putPost } from '../../controllers/posts';

const router = Router();

//Obter informações do Post
router.get('/view-post', getPost);

//Obter informações de todos os Post's
router.get('/', getAllPost);

//Criar Um novo Post
router.post('/', postPost);

//Trocar username de um Usuário
router.put('/', putPost);

//Deleta um Post 
router.delete('/', deletePost);

export default router;
