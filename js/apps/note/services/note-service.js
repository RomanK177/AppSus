import { utilService } from "../../../services/util-service.js";

const STORAGE_KEY = "notessDB";


const gNotes = _createNotes()

export const noteService = {
    getById,
    getNotes,
    removeNote,
    saveNote,
    getEmptyNote,
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
    notes.push(_createNote('NoteText', 'My Note', {txt: 'Fullstack Me Baby!'}, {backgroundColor: 'white', color: 'blue'}))
    notes.push(_createNote('NoteImg', 'Dog Image', {url: "http://some-img/me", title: "Me playing Mi"}, {backgroundColor: 'inherit'}));
    notes.push(_createNote('NoteTodos', 'My todos', { label: "How was it:", todos: [{ txt: "Do that", doneAt: null },{ txt: "Do this", doneAt: 187111111 }]}, {backgroundColor: 'inherit'}));
    notes.push(_createNote('NoteVideo', 'funny video', {url: "http://youtube.com/video", title: "Youtube Video"}, {backgroundColor: 'inherit'}));
    return notes;
}

function _createNote(type, noteTitle, info, style) {
    const note = {
        id: utilService.makeId(),
        type,
        noteTitle,
        info,
        style,
        isPinned: false,
        createdAt: new Date(),
    }
    return note;
}









// export const notesService = {
//     getById
// }



// const gNotes = [
//     {
//         type: "NoteText",
//         isPinned: true,
//         info: {
//             txt: "Fullstack Me Baby!"
//         }
//     }, {
//         type: "NoteImg",
//         info: {
//             url: "http://some-img/me",
//             title: "Me playing Mi"
//         },
//         style: {
//             backgroundColor: "#00d"
//         }
//     },
//     {
//         type: "NoteTodos",
//         info: {
//             label: "How was it:", todos: [
//                 { txt: "Do that", doneAt: null },
//                 { txt: "Do this", doneAt: 187111111 }]
//         }
//     },
//     {
//         type: "NoteVideo",
//         info: {
//             url: "http://youtube.com/some-video",
//             title: "My Video"

//         }
//     }
// ]


// function getById() {
//     return gNotes
// }
