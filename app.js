const express = require('express');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { User } = require('./db/models')
require('dotenv').config()


const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const addRouter = require('./routes/addList');
const hrCheckListRouter = require('./routes/hrCheckList')

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  name: 'sID',
  store: new FileStore({}),
  secret: process.env.SESSION,
  resave: true,
  saveUninitialized: false,
}

app.use(session(sessionConfig));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(async (req, res, next) => {
  if (req.session.userId) {
    const user = await User.findOne({ where: { id: req.session.userId }, row: true });
    res.locals.userId = req.session.userId;
    return next();
  } next();
})

app.use('/', indexRouter);
app.use('/addList', addRouter);
app.use('/login', loginRouter);
app.use('/hrCheckList', hrCheckListRouter)

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
})
