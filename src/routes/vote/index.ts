import { Router } from 'express';
import { postVote, putVote } from '../../controllers/vote';

const router = Router();

//Adiciona Likes/Dislikes
router.post('/', postVote);

//Substitui Likes & Dislikes
router.put('/', putVote);

export default router;
