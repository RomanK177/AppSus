import notePreview from './note-preview.cmp.js'
import noteModal from './note-modal.cmp.js'


export default {
    props:['notes'],
    template: `
        <section class="note-list">
            <ul >
                <li v-for="currNote in notes" :key="currNote.id" >
                    <div class="note-card">
                   <note-preview :note="currNote" @click.native="showModal()"></note-preview>
                   <!-- <note-modal :note="currNote" v-show="isShowModal" @close="closeModal" /> -->
                   <!-- <button id="show-modal" @click="showModal = true">Open Note</button> -->
                    <!-- use the modal component, pass in the prop -->
                    <note-modal v-if="showModal" @close="showModal = false" /> 
                   <button class="delete-btn" @click="emitRemove(currNote.id)">x</button>
                   </div>
                </li>
            </ul>
        </section>
    `,
      data () {
        return {
          isShowModal: false,
        }
      },
    methods: {
        emitRemove(noteId) {
            // console.log('OK', noteId);
            this.$emit('remove', noteId)
        },
        noteClicked() {
            // this.$router.push('/')
        },
        showModal() {
            this.isShowModal = true;
        },
        closeModal() {
            this.isShowModal = false;
        },
    
    },
    components:{
        notePreview,
        noteModal
    }
}