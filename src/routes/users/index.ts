import { Router } from 'express';
import { deleteUsers, getUsers, patchEmailUsers, patchPasswordUsers, patchUsernameUsers, postUsers } from '../../controllers/users';

const router = Router();

//Obter informações do Usuário
router.get('/', getUsers);

//Criar Um novo Usuário
router.post('/', postUsers);

//Trocar senha de um Usuário
router.patch('/update-password', patchPasswordUsers);

//Trocar email de um Usuário
router.patch('/update-email', patchEmailUsers);

//Trocar username de um Usuário
router.patch('/update-username', patchUsernameUsers);

//Deleta um Usuário
router.delete('/', deleteUsers);

export default router;
