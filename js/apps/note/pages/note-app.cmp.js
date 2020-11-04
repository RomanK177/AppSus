import { noteService } from "../services/note-service.js";
// import noteImg from '../cmps/note-img.cmp.js'
import appHeader from '../../../cmps/app-header.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
// import noteFilter from '../cmps/car/car-filter.cmp.js';
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    template: ` 
    <section v-if="notes" class="note-app">
    <appHeader></appHeader>
    <p> Notes App</p>
    <note-list @remove="removeNote" :notes="notesToShow"/> 
    

    <!-- <noteImg :notes="notes" v-for="note in note.notes" :type="notes.type" @setVal="setNoteType" ></noteImg> -->
    </section>
    
    
    
    `,
    data() {
        return {
            notes: null,
            filterBy: null
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
            noteService.add(this.noteToEdit);
            this.noteToEdit = noteService.getEmptyNote();
        },
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => eventBus.$emit('show-msg', 'Note Deleted'))
                .catch(err => console.log('something went wrong', err))
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }

    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const txt = this.filterBy.noteTitle.toLowerCase();
            let filteredNotes = this.notes.filter(note => note.noteTitle.toLowerCase().includes(txt))
            console.log('notestoshow',filteredNotes)
            return filteredNotes
        }
    },

    components: {
        appHeader,
        noteList
        // noteImg

    },



}