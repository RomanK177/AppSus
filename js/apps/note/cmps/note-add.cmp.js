import { noteService } from '../services/note-service.js'

export default {
    name: 'note-add',
    template: `
    <section class="note-add"> 
    <input @keyup.enter="addNewNote()" type="text" v-model="noteData.val">
    <select v-model="noteData.type">
        <option value="noteText">Text</option>
        <option value="noteImg">Image</option>
        <option value="noteTodos">Todo List</option>
        <option value="noteVideo">Video</option>
    </select>
    <!-- <button @click="addNewNote()"> Add Note </button> -->
    <!-- <button @click="setType('noteText')"> Add text </button> -->

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
        }



    }
}