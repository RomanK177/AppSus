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
    editNote,
    convertVidUrl
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

function cloneNote(note) {
    let newInfoJson = JSON.stringify(note.info);
    let newInfoObj = JSON.parse(newInfoJson)
    let newNote = _createNote(note.type, newInfoObj)
    gNotes.unshift(newNote)


}



function getEmptyNote() {
    return { id: '', type: '', info: {}, style: {}, isPinned: false, createdAt: null }
}

function _createNotes() {
    if (localStorage.getItem(STORAGE_KEY)) return utilService.loadFromStorage(STORAGE_KEY)
    const notes = []
    notes.push(_createNote('noteImg', { url: 'https://64.media.tumblr.com/c209b4aae643acfa82ea82cb35d91915/1dd4bd9c13687ea1-ff/s640x960/99f064456f5755b8e748bee6389867dd5e760983.jpg'} ));
    notes.push(_createNote('noteText', { txt: 'Watch every video on youtube about Vue JS known to man, so you can make an amazing app with using the vue framework. That\'s the life of a fullstack developer, being proficient and doing a lot of research on your own time!' }, '#FFE5EA' ));
    notes.push(_createNote('noteImg', { url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*' }));
    notes.push(_createNote('noteVideo', { url: 'https://www.youtube.com/embed/X-euQU-WcJY', title: 'Youtube Video' }, '#FFE5EA'));
    notes.push(_createNote('noteText', { txt: 'Don\'t forget to get dog food!' }, '#bcecfb'));
    notes.push(_createNote('noteText', { txt: 'A little short poem that I loved: To keep your marriage brimming With love in the loving cup, Whenever you’re wrong, admit it; Whenever you’re right, shut up.' }, '#bdbef1'));
    notes.push(_createNote('noteTodos', { label: "Birthday Party List:", todos: [{ txt: "Buy cake", doneAt: null }, { txt: "Get Decorations", doneAt: 187111111 }, { txt: "Buy Gift", doneAt: 187111112 }, { txt: "Send out the guest list", doneAt: 187111111 }, { txt: "beer", doneAt: 187111111 }]}, '#dbdcff'));
    notes.push(_createNote('noteImg', { url: 'https://ctl.s6img.com/society6/img/th0Cl1tzMrPSLbcYPYoejYwInm8/h_264,w_264/posters/18x24/~artwork,fw_2718,fh_3618,iw_2718,ih_3618/s6-original-art-uploads/society6/uploads/misc/2f260a5bb7be4d1fab875ae3ee704b33/~~/jennifers-body3067011-posters.jpg'} ));
    notes.push(_createNote('noteText', { txt: 'Meditate everyday, and practice gratitude' }, '#ccf2eb'));
    notes.push(_createNote('noteImg', { url: 'https://i.pinimg.com/originals/4e/7c/fa/4e7cfac0dd8bff9cb1497d30f270e005.jpg'} ));
    notes.push(_createNote('noteTodos', { label: "Grocery List:", todos: [{ txt: "Milk", doneAt: null }, { txt: "Apples", doneAt: 187111111 }, { txt: "Lettuce", doneAt: 187111112 }, { txt: "Oranges", doneAt: 187111111 }, { txt: "beer", doneAt: 187111111 }, { txt: "cake", doneAt: 187111111 }, { txt: "bananas", doneAt: 187111111 }, { txt: "tequila", doneAt: 187111111 }, { txt: "cucumbers", doneAt: 187111111 }, { txt: "tomatoes", doneAt: 187111111 }, { txt: "cabbage", doneAt: 187111111 }, { txt: "chicken", doneAt: 187111111 }, { txt: "hearts of palm", doneAt: 187111111 }, { txt: "cottage cheese", doneAt: 187111111 }, { txt: "chickpeas", doneAt: 187111111 }] }));
    notes.push(_createNote('noteVideo', { url: 'https://www.youtube.com/embed/hY7m5jjJ9mM', title: 'Youtube Video' }));
    notes.push(_createNote('noteImg', { url: 'https://archziner.com/wp-content/uploads/2020/01/tall-palm-trees-aesthetic-desktop-wallpaper-sunset-sky-background-in-yellow-and-pink.jpg'} ));
    notes.push(_createNote('noteVideo', { url: 'https://www.youtube.com/embed/mazvbLYCgbA', title: 'Youtube Video' }));
    notes.push(_createNote('noteText', { txt: 'Election 2020 Live Updates: Biden Wins Presidency. Democrats Rejoice. Republicans Disbelieve. MIAMI — On Election Day, nowhere was it more apparent that President Trump’s misleading branding of Joseph R. Biden Jr. as a “socialist” had been effective than in Miami, where Cuban-Americans helped deliver Florida for Mr. Trump. So when Mr. Biden became the president-elect on Saturday, elated “Cubanos con Biden” — Cubans with Biden — chose a symbolic place to celebrate: the Freedom Tower in downtown Miami, where many Cuban refugees were given assistance when they first arrived in South Florida.' }, '#bdbef1'));
    notes.push(_createNote('noteText', { txt: 'Get mom a birthday present tomorrow. Get her flowers, and make sure to arrange a surprise party for her! Call sister to see if she wants to chip in on the gift. Also plan a beach day for the family. Call and makesure all the family members can make it!! Super important to call Grandma and make sure she can make it. ' }, '#bcecfb'));
    utilService.storeToStorage(STORAGE_KEY, notes)
    return notes;
}

function _createNote(type, info, bgC = '#FFFFFF') {
    const note = {
        id: utilService.makeId(),
        type,
        info,
        bgC,
        isPinned: false,
        createdAt: new Date(),
    }
    return note;
}


function editNote(noteData) {
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
                return { txt: str, doneAt: Date.now() }
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
                return { txt: str, doneAt: Date.now() }
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

function convertVidUrl(url) {
    // url = "https://youtube.com/watch?v=TESTURLNOTTOBEUSED"
    let convertedUrl = url.replace("watch?v=", "embed/")
    return convertedUrl
}

