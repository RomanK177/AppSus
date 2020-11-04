import notePreview from './note-preview.cmp.js'


export default {
    props:['notes'],
    template: `
        <section class="note-list">
            <h2>Your Notes</h2>
            <ul >
                <li v-for="currNotes in notes" :key="currNotes.id" >
                   <note-preview :note="currNote" @click.native="noteClicked()" />
                   <button @click="emitRemove(currNote.id)">x</button>
                </li>
            </ul>
        </section>
    `,
    methods: {
        emitRemove(noteId) {
            // console.log('OK', noteId);
            this.$emit('remove', note.Id)
        },
        noteClicked() {
            // this.$router.push('/')
        }
    },
    components:{
        notePreview
    }
}