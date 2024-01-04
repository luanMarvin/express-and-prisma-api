import { Request, Response } from 'express';
import prisma from '../../database/prisma';
import { cryptPass } from '../../middlewares/crypt';

interface CreateNewUser {
    username: string;
    password: string;
    email: string;
}

export function getUsers(req: Request, res: Response) {
    //Obtem Username e Email, além das postagens feitas.
}

export async function postUsers(req: Request, res: Response) {
    //Adiciona um novo Usuário.
    try{
        const data: CreateNewUser = req.body;
        const hash = await cryptPass(data.password)
        const user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hash
            }
        })
        res.status(201).send('Usuário criado com sucesso.')
    } catch(error) {
        res.status(400).send(`Verifique novamente os campos da requisição. Error: ${error}`)
    }
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