import { noteService } from "../services/note-service.js";
// import noteImg from '../cmps/note-img.cmp.js'
import appHeader from '../../../cmps/app-header.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    template: ` 
    <section v-if="notes" class="note-app">
    <app-header></app-header>
    <!-- <p> Notes App</p> -->
    <note-filter @doFilter="setFilter" />
     <!-- NOTE ADD CMP -->
     <input type="text" v-model="noteData.val">
    <button @click="setType('noteText')"> Add text </button>
    <note-list @remove="removeNote" :notes="notesToShow"/> 
    <!-- <noteImg :notes="notes" v-for="note in note.notes" :type="notes.type" @setVal="setNoteType" ></noteImg> -->
    </section>
    
    
    
    `,
    data() {
        return {
            notes: null,
            filterBy: null,
            showModal: false,
            noteData: {
                val: '',
                type: 'noteText'
            }
        }

    },
    created() {
        noteService.getNotes()
            .then(notes => this.notes = notes)
        // console.log(notes)
    },
    methods: {
        setNoteType() {
            console.log('the current type of note is...')
        },
        addNote() {
            noteService.addNote(this.noteToEdit);
            this.noteToEdit = noteService.getEmptyNote();
        },
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(() => eventBus.$emit('show-msg', 'Note Deleted'))
                .catch(err => console.log('something went wrong', err))
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        addNewNote() {
            noteService.addNote(noteData)
        }

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const txt = this.filterBy.noteTitle.toLowerCase();
            let filteredNotes = this.notes.filter(note => note.noteTitle.toLowerCase().includes(txt))
            console.log('notestoshow', filteredNotes)
            return filteredNotes
        }
    },

    components: {
        appHeader,
        noteList,
        noteFilter
        // noteImg

    },



}