import { Request, Response } from 'express';
import prisma from '../../database/prisma';

export async function getPost(req: Request, res: Response) {
    try {
        const users = await prisma.post.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter usuários.');
  }
}

export function postPost(req: Request, res: Response) {
    res.send('Controller here');
}

export function putPost(req: Request, res: Response) {
    res.send('Controller here');
}

export function deletePost(req: Request, res: Response) {
    res.send('Controller here');
}
