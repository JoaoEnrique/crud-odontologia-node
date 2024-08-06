import express from 'express';
const router = express.Router(); 

export class AgendamentoRoutes{
    routes(){
        router.get('/', (req, res)=>{
            res.render('index', {title: "Home"})
        })
        
        router.get('/cadastrar', (req, res)=>{
            res.render('registrar', { title: "Agendar" })
        })
        
        
        router.get('/consultar', async (req, res)=>{
            let mensagemSucesso = req.query.mensagemSucesso;
            let mensagemErro = req.query.mensagemErro;
            
            return res.render('consultar', { agendamentos: [], mensagemSucesso, mensagemErro, title: "Consultar" })
        })
        
        return router;
    }
}