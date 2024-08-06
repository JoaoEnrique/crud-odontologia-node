const express = require('express')
const app = express()
const path = require('path');
const PORT = 3000

app.listen(PORT, () => console.log('http://localhost:' + PORT))

// Configuração do handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "../public", "views", "layouts"),
    partialsDir: path.join(__dirname, "../public", "views", "layouts"),
    helpers: {
        eq: function(v1, v2){
            return v1 == v2
        }
    }

}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "../public/views"));

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