import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import auth from './routes/auth';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mylilbanker', { useMongoClient: true });
app.use('/api/auth', auth);

app.get('/*', (request, response) => {
	response.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log('running on local host 8080'));