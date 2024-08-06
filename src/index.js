import express from 'express';
import setupHandlebars from './config/handlebars.js';
import setupMiddleware from './config/middleware.js';
import { AgendamentoRoutes } from './routes/agendamento.js';

const app = express();
const agendamentoRoutes = new AgendamentoRoutes().routes();
const PORT = 3000;

app.listen(PORT, () => console.log('http://localhost:' + PORT))

setupHandlebars(app);
setupMiddleware(app);
app.use(agendamentoRoutes);