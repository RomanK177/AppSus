import { noteService } from '../services/note-service.js'
import noteModal from '../cmps/note-modal.cmp.js'
import { eventBus } from '../../../services/event-bus-service.js'



export default {
    name: 'note-editor',
    props: ['note'],
    template: `
    <section class="note-editor">
        <label for="create-color">
            <input v-if="note" class="create-color"  id="create-color" type="color" v-model="note.bgC" @input="saveNote(note)"/>
        </label>
        <button class="delete-btn" @click="emitRemove(note.id)">
            <img class="trash" src="./assets/imgs/trash.svg">
        </button>
        <button class="pin-btn" @click="togglePinned(), saveNote(note);">
            <img class="trash" src="./assets/imgs/pin.svg">
        </button>
        <button @click="copyNote(note), saveNote(note)">
            <img class="trash" src="./assets/imgs/copy.svg">
        </button>
        <note-modal :note="note" :info="note.info" v-show="isShowModal" @close="closeModal"/>
        <button id="show-modal" @click="showModal">
        <img class="trash" src="./assets/imgs/edit.svg">
        </button>

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
        // removeNote(noteId) {
        //     noteService.removeNote(noteId)
        //         .then(() => eventBus.$emit('show-msg', 'Note Deleted'))
        //         .catch(err => console.log('something went wrong', err))
        // },


    },
    components: {
        noteModal
    }
}