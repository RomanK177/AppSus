import { noteService } from '../services/note-service.js'
import noteModal from '../cmps/note-modal.cmp.js'

export default {
    name: 'note-editor',
    props: ['note'],
    template: `
    <section class="note-editor">
        <input v-if="note"  type="color" v-model="note.bgC" @input="saveNote(note)" />
        <button class="delete-btn" @click="emitRemove(note.id)">x</button>
        <button class="pin-btn" @click="togglePinned(), saveNote(note);">Pin</button>
        <button @click="copyNote(note)">Copy</button>
        <note-modal :note="note" :info="note.info" v-show="isShowModal" @close="closeModal"/>
        <button id="show-modal" @click="showModal">Open Note</button>

    </section>

`,


    data() {
        return {
            isShowModal: false,
        }
    },
    methods: {
        emitRemove(noteId) {
            // console.log('OK', noteId);
            this.$emit('remove', noteId)
        },
        saveNote(note) {
            noteService.saveNote(note)
                .then(note => {
                    return this.note = note
                })
        },
        togglePinned() {
            console.log('pinned')
            this.note.isPinned = (this.note.isPinned) ? false : true
        },
        copyNote() {
            noteService.cloneNote(this.note)
        },
        showModal() {
            this.isShowModal = true;
        },
        closeModal() {
            this.isShowModal = false;
        },


    },
    components: {
        noteModal
    }
}