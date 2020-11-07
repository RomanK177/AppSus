import { noteService } from '../services/note-service.js'

export default {
  props: ['note'],
  template: `
      <section>
      <div class="modal-backdrop">
        <div class="modal">
          <section class="modal-body">
          <input v-if="note.type === 'noteTxt'" v-model="note.info.txt">
          <button type="button" class="btn-close" @click="close">x</button>
            <slot name="body">
            <input v-model="note.type">
              <!-- <li v-for="(todo, idx) in note.info.todos">{{note.info.todo.txt}} {{new Date(note.info.todo.doneAt).toLocaleTimeString()}}</li> -->
              <!-- <iframe width="200" height="200" :src="note.info.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
              
            </slot>
          </section>
        </div>
      </div>
    </section>
  

    `,
  data() {
    return {
      noteToEdit: noteService.getEmptyNote(),
      noteData: {
        val: '',
        type: 'noteText'
      },

    }
  },
  methods: {
    close() {
      this.$emit('close');
    },

    saveNote() {
      noteService.save(this.noteToEdit)
        .then(() => {
          const msg = {
            txt: 'Note Saved Successffully',
            type: 'success'
          }
          eventBus.$emit(EVENT_SHOW_MSG, msg)
        })
        .catch(err => {
          console.log('ERR:', err);
          const msg = {
            txt: 'Couldnt save your note',
            type: 'danger'
          }
          eventBus.$emit(EVENT_SHOW_MSG, msg)

        })
    },
   editNote(){
     noteService.editNote(this.noteData)

   }
 
  }


}

