const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');


const notes = require('./db/db.json')


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
  newNotes.id = notes.length + 1;
  console.log(newNotes);
  console.log(notes);
  notes.push(newNotes);

  fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.json(newNotes);
});







app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});