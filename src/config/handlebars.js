import exphbs from 'express-handlebars';
import path from 'path';
import { Helper } from '../helpers/index.js';

const helperInstance = new Helper();

// Configuração do handlebars
const setupHandlebars = (app) => {
    app.engine('handlebars', exphbs.engine({
        defaultLayout: "main",
        layoutsDir: path.join("public", "views", "layouts"),
        partialsDir: path.join("public", "views", "layouts"),
        helpers: {
            eq: helperInstance.eq
        }
    }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join("public/views"));
};

export default setupHandlebars;