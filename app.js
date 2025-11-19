import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import loginRouter from "./routes/loginRouter.js"
import controllerRouter from "./routes/controllerRouter.js"

//API
import userRouter from "./routes/userRouter.js"
import chatRouter from "./routes/chatRouter.js"

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

app.use("/login", loginRouter)

const requireAuth = (request, response, next) => {
  console.log("auth");
  console.log(request.session.username);
  if (request.session.username) {
    console.log(`Triggered on ${request.session.username}`);
    next();
  } else {
    response.redirect('/login');
  }
};

app.use(requireAuth)

app.use("/home", controllerRouter)

//API
app.use("/chats", chatRouter)
app.use("/users", userRouter)

app.get('/', (request, response)=>{
    console.log("I was hit. ow");
    response.render('frontpage', {title: 'Frontpage'})
})

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT', PORT);
});