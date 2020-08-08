const express = require('express');
const app = express();
const path = require('path');


const notes = require('./Develop/db/db.json')
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNotes = req.body;
  console.log(newNotes);
  console.log(notes);
  notes.push(newNotes);
  res.json(newNotes);
  
});



app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });