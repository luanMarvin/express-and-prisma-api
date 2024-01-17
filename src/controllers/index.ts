import { Request, Response } from 'express';

// Rota root
export function rootRoute(req: Request, res: Response){
    res.status(200).json({ 
        'API': 'Essa rota raíz trás mais explicação sobre a API, consulte p README para mais informações.',
        '/posts': {
            'GET: /posts': {
                'req': 'Requisição com Metodo GET, não é necessário nenhuma informação complementar.',
                'res': '',
                'Exemplo': ''
            },
            'GET: /posts/view-post': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'POST: /posts': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'PUT: /posts': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'DELETE: /posts': {
                'req': '',
                'res': '',
                'Exemplo': ''
            }
        },
        '/users': {
            'GET: /users': {
                'req': 'Requisição com Metodo GET, não é necessário nenhuma informação complementar.',
                'res': '',
                'Exemplo': ''
            },
            'POST: /users': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'PATCH: /users/update-password': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'PATCH: /users/update-email': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'PATCH: /users/update-username': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'DELETE: /users': {
                'req': '',
                'res': '',
                'Exemplo': ''
            }
        },
        '/vote': {
            'POST: /vote': {
                'req': '',
                'res': '',
                'Exemplo': ''
            },
            'PUT: /vote': {
                'req': '',
                'res': '',
                'Exemplo': ''
            }
        }
    })
}