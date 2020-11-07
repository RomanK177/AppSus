import { noteService } from '../services/note-service.js'

export default {
    props: ['note'],
    template: `
      <section v-if="note.type==='noteText'">
      <div class="modal-backdrop">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">
              <button type="button" class="btn-close" @click="close">x</button>
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
            <input type="text" v-model="note.info.txt" @input="saveNote(note)">
            </slot>
          </section>
        </div>
      </div>
    </section>

    <section v-else-if="note.type==='noteImg'">
      <div class="modal-backdrop">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">
              <button type="button" class="btn-close" @click="close">x</button>
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
              <img :src="note.info.url" alt="">
            
            <input type="text" v-model="note.info.url" @input="saveNote(note)">
             
              
            </slot>
          </section>
        </div>
      </div>
    </section>

    <section v-else-if="note.type==='noteVideo'">
      <div class="modal-backdrop">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">
              <button type="button" class="btn-close" @input="saveNote(note)">x</button>
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
            <iframe width="200" height="200" :src="note.info.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <input type="text" v-model="note.info.url" @input="saveNote(note)">
             
              
            </slot>
          </section>
        </div>
      </div>
    </section>

    <section v-else-if="note.type==='noteTodos'">
      <div class="modal-backdrop">
        <div class="modal">
          <header class="modal-header">
            <slot name="header">
              <button type="button" class="btn-close" @click="close">x</button>
            </slot>
          </header>
          <section class="modal-body">
            <slot name="body">
            <input type="text" v-model="note.info.label" @input="saveNote(note)">
              <div id="modalTodos" v-for="(todo, index) in note.info.todos" :key="index">
                 <input type="text" v-model="todo.txt" @input="saveNote(note)">
              </div>
              <button @click="addToDo">+</button>
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

        saveNote(note) {
            noteService.saveNote(note)
                .then(note => {
                    return this.note = note
                })
        },
        editNote() {
            noteService.editNote(this.noteData)

        },
        addToDo() {
            this.note.info.todos.push({ txt: '', doneAt: new Date() })
        }


    },


}