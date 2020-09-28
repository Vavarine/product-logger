import express from 'express';
import cors from 'cors';

import DB from './database/db';
import routes from './routes';

// Inicializando o app
const app = express();
app.use(express.json());
app.use(cors());

// Conecta ao banco
const db = new DB;
db.testConnection();

// Rotas
app.use('/api/', routes);

app.listen(3030); 