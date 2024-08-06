import express from 'express';
const router = express.Router(); 

export class AgendamentoRoutes{
    routes(){
        router.get('/', (req, res) => {
            res.render('index', { title: "Home" });
        });

        router.get('/cadastrar', (req, res) => {
            res.render('registrar', { title: "Agendar" });
        });

        router.get('/consultar', (req, res) => {
            res.render('consultar', { title: "Consultar", agendamentos: [] });
        });
        
        return router;
    }
}