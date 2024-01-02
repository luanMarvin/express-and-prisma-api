import { Request, Response } from 'express';

export function getUsers(req: Request, res: Response) {
    res.send('Controller here');
}

export function postUsers(req: Request, res: Response) {
    res.send('Controller here');
}

export function patchPasswordUsers(req: Request, res: Response) {
    res.send('Controller here');
}

export function patchEmailUsers(req: Request, res: Response) {
    res.send('Controller here');
}

export function patchUsernameUsers(req: Request, res: Response) {
    res.send('Controller here');
}

export function deleteUsers(req: Request, res: Response) {
    res.send('Controller here');
}