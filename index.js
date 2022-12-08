const express = require('express');
const mongoose = require('mongoose');
const json = require('body-parser').json();
const dotenv = require('dotenv');
dotenv.config();

const Routes = require('./endpoints/quiz/Routes');

const app = express();

app.use(json);
app.use('/quiz', Routes);

app.listen(process.env.PORT || 8080, () => console.log('Server wartet auf Anfragen...'));

mongoose.connect(process.env.MONGOURI || 'mongodb://127.0.0.1:27017', () => console.log('Datenbank online!'));

