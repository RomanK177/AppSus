import { noteService } from '../services/note-service.js'

export default {
    name: 'note-add',
    template: `
    <section class="note-add"> 
    <!-- <input type="text" v-model="noteData.val"> -->
    <select v-model="noteData.val">
        <option value="noteTxt">Text</option>
        <option value="noteImg">Image</option>
        <option value="noteTodos">Todo List</option>
        <option value="noteVideo">Video</option>
    </select>
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
            noteService.addNote(noteData)
        }



    }
}