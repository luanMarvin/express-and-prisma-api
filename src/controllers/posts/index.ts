import { Request, Response } from 'express';
import prisma from '../../database/prisma';

interface CreateNewPost {
    title: string;
    content: string;
    authorId: number;
}

export async function getPost(req: Request, res: Response) {
    //Obtém dados de uma postagem.
}

export async function getAllPost(req: Request, res: Response){
    try {
        const allPosts = await prisma.post.findMany();
        res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).send(error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function postPost(req: Request, res: Response) {
    try {
        const data: CreateNewPost = req.body;
        const posts = await prisma.post.create({
            data: {
                title: data.title,
                content: data.content,
                author: { connect: { id: data.authorId } },
            },
          })
          res.status(201).json({
            'Titulo': data.title,
            'Conteudo': data.content
          })
    } catch (error) {
        res.status(500).send(error)
    } finally {
        await prisma.$disconnect();
    }
}

export function putPost(req: Request, res: Response) {
    //Edita uma postagem.
}

export function deletePost(req: Request, res: Response) {
    //Apaga uma postagem.
}
