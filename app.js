const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const chalk = require('chalk');

const router = require('./server/routes');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('server/templates'));
app.use('/public', express.static('browser/public'));

app.use('/', router);

app.listen(3002, () => {
  console.log( chalk.blue('App is listening on port 3002') );
});