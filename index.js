const express = require('express');
const mongoose = require('mongoose');
const json = require('body-parser').json();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const Routes = require('./endpoints/quiz/Routes');

const app = express();

app.use(cors());
app.use(json);
app.use('/api', Routes);

app.listen(process.env.PORT || 8080, () => console.log('Server wartet auf Anfragen...'));

mongoose.connect('mongodb+srv://admin:jIosPtbsgL11VazN@cluster0.j4hrglf.mongodb.net/?retryWrites=true&w=majority', () => console.log('Datenbank online!'));

