const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.user(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to / send or / routes'));

app.get('/send', (req, res) =>
res.sendFile(path.join(__dirname, 'public/sendFile.html')));

app.get('/routes', (req, res) =>
res.sendFile(path.join(__dirname, 'public/sendFile.html')));

app.listen(PORT, () =>
console.log('example app listening at http://localhost:${PORT}'));