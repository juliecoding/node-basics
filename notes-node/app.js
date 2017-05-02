const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

var globalTitle = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: globalTitle,
        body: {
            describe: 'The main text of the note',
            demand: true,
            alias: 'b'
        } 
    })
    .command('list', 'List ALL the notes!')
    .command('read', 'Get a note from the notes array', {
        title: globalTitle
    })
    .command('remove', 'Remove a note from the notes array', {
        title: globalTitle
    })
    .help()
    .argv

let command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note added: ', `Title: ${note.title}`, `Body: ${note.body}`)
    } else {
        console.log('Note not saved. Title may be a duplicate.')
    }
}
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`There are ${allNotes.length} note(s).`);
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Here\'s your note: ', note.title, " ", note.body);
    } else {
        console.log('Note not found :( ');
    }
}
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('Command not understood');
}

