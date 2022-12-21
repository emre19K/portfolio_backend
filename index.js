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

mongoose.connect('mongodb://admin:jIosPtbsgL11VazN@ac-plfoc5s-shard-00-00.j4hrglf.mongodb.net:27017,ac-plfoc5s-shard-00-01.j4hrglf.mongodb.net:27017,ac-plfoc5s-shard-00-02.j4hrglf.mongodb.net:27017/?ssl=true&replicaSet=atlas-dj7vc0-shard-0&authSource=admin&retryWrites=true&w=majority', () => console.log('Datenbank online!'));

