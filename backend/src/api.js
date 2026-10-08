import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import Rotas from './routes.js';

const api = express();
api.use(express.json());
api.use(cors());
Rotas(api);

const PORTA = process.env.PORT;
api.listen(PORTA, () => console.log(`A Api subiu com sucesso na porta ${PORTA}`));