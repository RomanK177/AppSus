import { noteService } from '../services/note-service.js'

export default {
    name: 'note-add',
    template: `
    <section class="note-add"> 
    <input type="text" v-model="noteData.val">
    <select v-model="noteData.type">
        <option value="noteText">Text</option>
        <option value="noteImg">Image</option>
        <option value="noteTodos">Todo List</option>
        <option value="noteVideo">Video</option>
    </select>
    <button @click="addNewNote"> Add Note </button>
    <!-- <button @click="setType('noteText')"> Add text </button> -->

    </section>
    
    `,


    // function addNote(noteData) {
    //     switch (noteData.type) {
    //         case 'txt':
    //             noteData.type === 'noteText'
    //             break;
    //         case 'image':
    //             noteData.type === 'noteImg'
    //             break;
    //         case 'list':
    //             noteData.type === 'noteTodos'
    //             break;
    //         case 'video':
    //             noteData.type === 'noteVideo'
    //             break;

    //     }
    //     _createNote(noteData.type, noteData.val)

    // }

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
        }



    }
}