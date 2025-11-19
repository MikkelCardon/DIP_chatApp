import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import userRouter from "./routes/userRouter.js"
import loginRouter from "./routes/loginRouter.js"

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

app.get('/api', (request, response) => {
    res.send('Hello')
});

app.use("/login", loginRouter)

const requireAuth = (request, response, next) => {
  if (request.session.username) {
    next();
  } else {
    response.redirect('/login');
  }
};

app.use(requireAuth)

app.use("/home", userRouter)

app.get('/', (request, response)=>{
    response.render('frontpage', {title: 'Frontpage'})
})

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT', PORT);
});