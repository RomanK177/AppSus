import { noteService } from '../services/note-service.js'

export default {
    name: 'note-editor',
    props: ['note'],
    template: `
    <section class="note-editor">
        <input v-if="note"  type="color" v-model="note.bgC" @input="saveNote(note)" />
        <button class="delete-btn" @click="emitRemove(note.id)">x</button>
        <button :class="{pinned: isPinned}" @click="note.isPinned = true">Pin</button>
    </section>






`,


    data() {
        return{
            isPinned: true
        }
    },
    methods: {
        emitRemove(noteId) {
            // console.log('OK', noteId);
            this.$emit('remove', noteId)
        },
        saveNote(note){
            noteService.saveNote(note)
            .then(note =>{
                return this.note = note
            })
        },
        togglePinned(){
            !this.isPinned === this.isPinned
        },
        
    }
}