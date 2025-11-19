import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import loginRouter from "./routes/loginRouter.js"

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
    console.log(request.session.username);
  if (request.session.username) {
    next();
  } else {
    response.redirect('/login');
  }
};

app.use(requireAuth)

//API
app.use("/api", (request, response, next) => {
    let userLevel = request.session.userLevel

    console.log("userLevel: ", userLevel);
    
    if(userLevel < 3){
        response.status(401).send("[ERROR]: UserLevel is under level 3")
    }
    next()
})

app.use("/api/chats", chatRouter)
app.use("/api/users", userRouter)

app.get('/', (request, response)=>{
    response.render('frontpage', {title: 'Frontpage'})
})

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT', PORT);
});