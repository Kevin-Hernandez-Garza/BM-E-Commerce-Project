const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection'); // TODO -- Check Connectivity
const hbs = exphbs.create({}) // TODO -- Add Helpers ..
// const helpers = require('./utils/helpers');

const routes = require('./controllers/');

const app = express(); // initiate web server as instance from express
const PORT = process.env.PORT || 3001;

// Configs
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


//User Middleware


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, `public`)));
app.use(session(sess)); 
app.engine('handlebars', hbs.engine); // TODO -- Uncomment after Test API
app.set('view engine', 'handlebars'); // TODO -- UnComment After Test API


// Register API & FE Routes
app.use(require('./controllers'));

// Error Handling Routes

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });