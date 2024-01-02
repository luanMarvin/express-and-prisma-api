import { Request, Response } from 'express';
import prisma from '../../database/prisma';

export function getUsers(req: Request, res: Response) {
    //Obtem Username e Email, além das postagens feitas.
}

export function postUsers(req: Request, res: Response) {
    //Adiciona um novo Usuário.
}

export function patchPasswordUsers(req: Request, res: Response) {
    //Muda a senha de um Usuário.
}

export function patchEmailUsers(req: Request, res: Response) {
    //Muda o email de um Usuário.
}

export function patchUsernameUsers(req: Request, res: Response) {
    //Muda o Username de um Usuário.
}

export function deleteUsers(req: Request, res: Response) {
    //Apaga um Usuário.
}