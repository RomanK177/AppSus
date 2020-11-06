import { utilService } from '../../../services/util-service.js'
import notePreviewCmp from "../cmps/note-preview.cmp.js";

const STORAGE_KEY = "notesDB";


const gNotes = _createNotes()

export const noteService = {
    getById,
    getNotes,
    removeNote,
    saveNote,
    getEmptyNote,
    addNote,
    cloneNote,
    editNote
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
    utilService.storeToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve()
}

function saveNote(note) {
    if (note.id) {
        const noteIdx = gNotes.findIndex(currNote => note.id === currNote.id)
        gNotes.splice(noteIdx, 1, note)
    } else { 
        note.id = utilService.makeId();
        gNotes.unshift(note);
    }
    utilService.storeToStorage(STORAGE_KEY, gNotes)
    return Promise.resolve(note)
        // return Promise.reject('Big Badabum');
}

function cloneNote (note) {
    let newNote = _createNote(note.type, note.info)
    gNotes.unshift(newNote)


}



function getEmptyNote() {
    return { id: '', type: '', info: {}, style: {}, isPinned: false, createdAt: null }
}

function _createNotes() {
    if (localStorage.getItem(STORAGE_KEY)) return utilService.loadFromStorage(STORAGE_KEY)
    const notes = []
    notes.push(_createNote('noteText', { txt: 'Fullstack Me Baby!' }));
    notes.push(_createNote('noteImg', { url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }));
    notes.push(_createNote('noteTodos', { label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: 187111111 }] }));
    notes.push(_createNote('noteVideo', { url: 'https://www.youtube.com/embed/hY7m5jjJ9mM', title: 'Youtube Video' }));
    utilService.storeToStorage(STORAGE_KEY, notes)
    return notes;
}

function _createNote(type, info) {
    const note = {
        id: utilService.makeId(),
        type,
        info,
        bgC: '#FFFFFF',
        isPinned: false,
        createdAt: new Date(),
    }
    return note;
}


function editNote(noteData){
    let infoObject = {}
    console.log(noteData)
    switch (noteData.type) {
        case 'noteText':
            infoObject = {
                txt: noteData.val
            }
            break;
        case 'noteImg':
            infoObject = {
                url: noteData.val
            }
            break;
        case 'noteTodos':
            let todoList = noteData.val
            let strs = todoList.split(',')
            let strTodos = strs.map(str => {
                return {txt: str, doneAt: Date.now()}
            })
            infoObject = {
                label: '',
                todos: strTodos
                
            }
            break;
        case 'noteVideo':
            infoObject = {
                url: convertVidUrl(noteData.val)
            }
            break;

    }
    utilService.storeToStorage(STORAGE_KEY, gNotes)
}

function addNote(noteData) {
    let infoObject = {}
    console.log(noteData)
    switch (noteData.type) {
        case 'noteText':
            infoObject = {
                txt: noteData.val
            }
            break;
        case 'noteImg':
            infoObject = {
                url: noteData.val
            }
            break;
        case 'noteTodos':
            let todoList = noteData.val
            let strs = todoList.split(',')
            let strTodos = strs.map(str => {
                return {txt: str, doneAt: Date.now()}
            })
            infoObject = {
                label: '',
                todos: strTodos
                
            }
            break;
        case 'noteVideo':
            infoObject = {
                url: convertVidUrl(noteData.val)
            }
            break;

    }
    gNotes.push(_createNote(noteData.type, infoObject))
    utilService.storeToStorage(STORAGE_KEY, gNotes)


}

function convertVidUrl(url){
// url = "https://youtube.com/watch?v=TESTURLNOTTOBEUSED"
let convertedUrl = url.replace("watch?v=", "embed/")
return convertedUrl
}
