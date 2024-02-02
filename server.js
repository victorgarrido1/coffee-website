//dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');


const app = express();
const PORT = process.env.PORT || 3001;


//HandelBars engine to use the the helper functions
const hbs = exphbs.create({ helpers });

app.engine('handlebars'. hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

