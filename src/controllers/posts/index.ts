import { Request, Response } from 'express';
import prisma from '../../database/prisma';

export async function getPost(req: Request, res: Response) {
    //Obtém dados de uma postagem.
}

export function getAllPost(req: Request, res: Response){
    //Obtém informações de todas as postagens.
}

export function postPost(req: Request, res: Response) {
    //Cria uma nova postagem.
}

export function putPost(req: Request, res: Response) {
    //Edita uma postagem.
}

export function deletePost(req: Request, res: Response) {
    //Apaga uma postagem.
}
