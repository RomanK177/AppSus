import {noteService} from '../services/note-service.js'

export default {
    name: 'note-add',
    template: `
    <input type="text" v-model="noteData.val">
    <button @click="setType('noteText')"> Add text </button>
    
    
    
    
    `,

    data (){
        return {
            noteData: {
                val: '',
                type: 'noteText'
            }  
        }
    },
    methods : {
        addNewNote(){
            noteService.addNote(noteData)
        }



    }
}