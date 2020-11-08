import { noteService } from '../services/note-service.js'

export default {
    name: 'note-add',
    template: `
    <section class="note-add"> 
    <input @keyup.enter="addNewNote()" type="text" v-model="noteData.val" v-if="renderTodos">
    <!-- <div class="add-txt">
  <label for="txt-input">
    <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg"/>
  </label>
  <input id="txt-input" v-model="noteData.type" value="noteText" />
</div>
<div class="add-txt">
  <label for="txt-input">
    <img src="./assets/imgs/edit.svg"/>
  </label>
  <input id="txt-input" v-model="noteData.type" value="noteImg" />
</div> -->


    <!-- <button v-model="noteData.type" value="noteText">Text</button>
        <button v-model="noteData.type" value="noteImg">Image</button>
        <button  v-model="noteData.type" value="noteTodos">Todo List</button>
        <button v-model="noteData.type" value="noteVideo">Video</button>
    -->
    <!-- <section class="note-add">  -->
    <!-- <input @keyup.enter="addNewNote()" type="text" v-model="noteData.val" v-if="renderTodos"> -->
    <select v-model="noteData.type">
        <option value="noteText">Text</option>
        <option value="noteImg">Image</option>
        <option value="noteTodos">Todo List</option>
        <option value="noteVideo">Video</option>
    </select>
    

    </section>
    
    `,

    data() {
        return {
            noteData: {
                val: '',
                type: 'noteText'
            }
        }
    },
    methods: {
        addNewNote() {
            noteService.addNote(this.noteData)
            this.noteData.val = '';
        },
        renderTodos() {
            if (noteData.type === 'noteTodos') {
                let todoList = noteData.val
                if (todoList.includes(',')) {
                    todoList.split(',')

                }
            }
        },
      



    }
}