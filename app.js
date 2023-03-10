
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
 
// customize Yargs Version 1.1.0
yargs.version('1.1.0')

// creating a add command 
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder:{
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
})

// creating a remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder:{
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
        // body : {
        //     describe : 'Note Body',
        //     demandOption : true,
        //     type: 'string'
        // }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// creating a list command
yargs.command({
    command : 'list',
    describe : 'List all notes',
    handler(){
        notes.listNotes();
    }
})

// creating a read command
yargs.command({
    command : 'read',
    describe : 'Reading all notes',
    builder:{
        title:{
            describe : 'Note Title',
            demandOption : true,
            type : 'string'
        }
    },    
    handler(argv){
        notes.readNote(argv.title);
    }
})


yargs.parse()
// add, remove, read, list
