const express = require('express');
const path = require('path');
const app = express();
const notes = require('./Develop/db/db.json')
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, 'notes.html'));
// });

app.get('/api/notes', (req, res) => {
  return res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNotes = req.body;
  console.log(newNotes);
  notes.push(newNotes);
  res.json(newNotes);
});

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });