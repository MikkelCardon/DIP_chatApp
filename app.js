import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import router from "./routes/router.js"

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static('public'));
app.use(morgan('tiny'));
app.set('view engine', 'pug')
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.use("/home", router)

app.get('/pug', (request, response)=>{
    response.render('frontpage', {title: 'FORSIDE'})
})

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT', PORT);
});