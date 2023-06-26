import express from 'express';
import __dirname from './utils/utils.js'
import handlebars from 'express-handlebars';
import cors from 'cors';
import path from 'path';
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import messagesRouter from './routes/messages.router.js'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io';
import { productsUpdated, chat } from './utils/socketUtils.js';
import displayRoutes from 'express-routemap';
import mongoose from 'mongoose';
import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } from './utils/mongoDBConfig.js';

//consts
const PORT = 8080;

//Express middlewares config
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Handlebars config
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

//Public folder config
app.use('/files', express.static(path.join(__dirname, './public')));

//Routes
app.use('/api/alive', (req, res) => {
    res.status(200).json({ status: 1, message: 'Flowery 4107 backend is alive' });
});
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/messages', messagesRouter);
app.use('/', viewsRouter);

//mongoDB connection
const mongo = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log(`MongoDB connection successful to ${DB_NAME} database`);
})
.catch(err => {
    console.log(`Cannot connect to MongoDB ${DB_NAME} database`);
});

//Server config
const serverHttp = app.listen(PORT, () => {
    displayRoutes(app);
    console.log(`Flowery 4107 Backend server is now up on port ${PORT}`)
});

//Socket.io config: link http server to socket.io server
const io = new Server(serverHttp);

app.set('io', io);

io.on('connection', socket => {
    console.log('New client connected', socket.id);
    productsUpdated(io);
    chat(socket, io);
});