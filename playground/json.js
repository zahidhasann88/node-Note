const fs = require('fs');

var orginalNote = {
    title: 'Some title',
    body: 'Some body'
}

var orginalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('notes.json', orginalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);