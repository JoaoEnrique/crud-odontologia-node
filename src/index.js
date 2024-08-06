import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { Helper } from './helpers/index.js';

const PORT = 3000;

const app = express();
const helperInstance = new Helper(); // Crie uma instância da classe

app.listen(PORT, () => console.log('http://localhost:' + PORT))

// Configuração do handlebars
app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join("public", "views", "layouts"),
    partialsDir: path.join("public", "views", "layouts"),
    helpers: {
        eq: helperInstance.eq // Registrar o helper eq da instância
    }

}));
app.set('view engine', 'handlebars');
app.set('views', path.join("public/views"));

// Servindo arquivos estáticos
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('index', {title: "Home"})
})

app.get('/cadastrar', (req, res)=>{
    res.render('registrar', { title: "Agendar" })
})


app.get('/consultar', async (req, res)=>{
    let mensagemSucesso = req.query.mensagemSucesso;
    let mensagemErro = req.query.mensagemErro;
    
    return res.render('consultar', { agendamentos: [], mensagemSucesso, mensagemErro, title: "Consultar" })
})