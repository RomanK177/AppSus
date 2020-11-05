import { noteService } from '../services/note-service.js'

export default {
    props: ['note'],
    template: `
    <section v-if="note" class="modal">
    <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
        {{note.noteTitle}}
          <button type="button" class="btn-close" @click="close">x</button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
            {{note.info}}
            {{note.style}}
            {{note.createdAt}}
         </slot>
       </section>
    </div>
  </div>
        <h1>
            <pre>{{note}}</pre>
        </h1>
    </section>
    `,
    methods: {
        close() {
          this.$emit('close');
        }
    },
    // data() {
    //     return {
    //         note : null
    //     }
    // },

    // createdAt(){
    //     noteService.getById(noteId)
    //     .then
    // }

}

// return { id: '', type: '', info: {}, style: {}, isPinned: false, createdAt: null }