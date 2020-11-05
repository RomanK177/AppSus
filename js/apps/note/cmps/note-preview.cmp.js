import noteText from './note-text.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteVideo from './note-video.cmp.js'






export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <component :is="note.type" :info="note.info" />
            <!-- NOTE ADD CMP -->
            <!-- <input type="text" v-model="noteData.val">
            <button @click="setType('noteText')"> Add text </button> -->
           <!-- <router-link :to="'/note/' note.id" exact>Edit</router-link>  -->
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
    computed: {
        // previewClass() {
        //     return { pinned: this.note.isPinned }
        // }
    },
    components: {
        noteText,
        noteImg, 
        noteTodos,
        noteVideo
    }
}