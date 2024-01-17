// Imports
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts';
import userRoutes from './routes/users';
import voteRoutes from './routes/vote';
import { rootRoute } from './controllers';

const app = express();

app.use(bodyParser.json());

// Rotas API
app.use('/posts', postRoutes)
app.use('/users', userRoutes)
app.use('/vote', voteRoutes)

// Rota Root
app.use('/', rootRoute)

// Error 404
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});
  
// Outros Erros
app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor' });
});
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor online na porta ${PORT}`);
});
