import { utilService } from "../../../services/util-service.js";
import notePreviewCmp from "../cmps/note-preview.cmp.js";

const STORAGE_KEY = "notessDB";


const gNotes = _createNotes()

export const noteService = {
    getById,
    getNotes,
    removeNote,
    saveNote,
    getEmptyNote,
    addNote
}

function getById(id) {
    const note = gNotes.find(currNote => currNote.id === id)
    return Promise.resolve(note)
}

function getNotes() {
    // console.log(gNotes)
    return Promise.resolve(gNotes)
    // .then(console.log(gNotes))

}

function removeNote(noteId) {
    const idx = gNotes.findIndex(note => note.id === noteId);
    gNotes.splice(idx, 1);
    return Promise.resolve()
}

function saveNote(note) {
    if (note.id) {
        const noteIdx = note.findIndex(currNote => note.id === currNote.id)
        gNotes.splice(noteIdx, 1, note)
    } else {
        note.id = utilService.makeId();
        gNotes.unshift(note);
    }
    return Promise.resolve(note)
    // return Promise.reject('Big Badabum');
}

function getEmptyNote() {
    return { id: '', type: '', info: {}, style: {}, isPinned: false, createdAt: null }
}

function _createNotes() {
    if (localStorage.getItem(STORAGE_KEY)) return utilService.loadFromStorage
    const notes = []
    notes.push(_createNote('noteText', { txt: 'Fullstack Me Baby!' }));
    notes.push(_createNote('noteImg', { url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'}));
    notes.push(_createNote('noteTodos', { label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }] }));
    notes.push(_createNote('noteVideo', { url: "http://youtube.com/video", title: "Youtube Video" }));
    return notes;
}

function _createNote(type, info) {
    const note = {
        id: utilService.makeId(),
        type,
        info,
        isPinned: Math.random() > 0.5,
        createdAt: new Date(),
    }
    return note;
}

function addNote(noteData) {
    switch (noteData.type) {
        case 'noteText':
            noteData.type === 'noteText'
            break;
        case 'noteImg':
            noteData.type === 'noteImg'
            break;
        case 'noteTodos':
            noteData.type === 'noteTodos'
            break;
        case 'noteVideo':
            noteData.type === 'noteVideo'
            break;
           
    }
    _createNote(noteData.type, noteData.val)

}







