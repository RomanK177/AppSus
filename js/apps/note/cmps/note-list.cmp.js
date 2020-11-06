import notePreview from './note-preview.cmp.js'
import noteModal from './note-modal.cmp.js'
import { noteService } from '../services/note-service.js'
import noteEditor from '../cmps/note-editor.cmp.js'
// import { utilService } from '../../../services/util-service.js'



export default {
    props: ['notes'],
    template: `
        <section >
            <ul class="note-list">
                <li class="card-container" v-for="currNote in notes" :key="currNote.id" :style="{backgroundColor: currNote.bgC}">
                    <div class="note-card">
                        <note-preview :note="currNote" @click.native="showModal()"></note-preview>
                        <note-editor :note='currNote' @remove="removeNote"></note-editor>
                        <!-- <input  type="color" v-model="currNote.bgC" /> -->
                        <!-- <note-modal :note="currNote" v-show="isShowModal" @close="closeModal" /> -->
                        <!-- <button id="show-modal" @click="showModal = true">Open Note</button> -->
                        <!-- use the modal component, pass in the prop -->
                        <note-modal v-if="showModal" @close="showModal = false" /> 
                        <!-- <button class="delete-btn" @click="emitRemove(currNote.id)">x</button> -->
                    </div>
                </li>
            </ul>
        </section>

    `,
    data() {
        return {
            isShowModal: false,
            // color: '0000'
        }
    },
    methods: {
        noteClicked() {
            // this.$router.push('/')
        },
        showModal() {
            this.isShowModal = true;
        },
        closeModal() {
            this.isShowModal = false;
        },
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(() => eventBus.$emit('show-msg', 'Note Deleted'))
                .catch(err => console.log('something went wrong', err))
        },

    },
    components: {
        notePreview,
        noteModal,
        noteEditor
    }

}