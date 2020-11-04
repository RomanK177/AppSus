import { notesService } from "../services/note-service.js";
import noteImg from '../cmps/note-img.cmp.js'
import appHeader from '../../../cmps/app-header.cmp.js'

export default {
    template: ` 
    <section v-if="note" class="notes-app">
    <appHeader></appHeader>
    <p> Notes App</p>
    <component :is="notes.type"v-for="notes in note.notes" :type="notes.type" @setVal="setNoteType" ></component>
    </section>
    
    
    
    `,
    data() {
        return {
            note: null
        }
    },
    created() {
        this.note = notesService.getById()
    },

    methods: {
        setNoteType() {
            console.log('the current type of note is...')
        }
    },

    components: {
        appHeader,

    }


}