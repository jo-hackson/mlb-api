import express from 'express';
import path from 'path';

const app = express();

app.post("/api/auth", (request, response) => {
	response.status(400).json({ errors: { global: 'invalid credentials'} });
});

app.get('/*', (request, response) => {
	response.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(8080, () => console.log('running on local host 8080'));