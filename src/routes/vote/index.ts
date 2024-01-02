import { Router } from 'express';
import { getVote, postVote, putVote } from '../../controllers/vote';

const router = Router();

//Obter informações dos Valores de Likes & Dislikes
router.get('/', getVote);

//Adiciona Likes/Dislikes
router.post('/', postVote);

//Substitui Likes & Dislikes
router.put('/', putVote);

export default router;
