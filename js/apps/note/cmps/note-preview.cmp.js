
export default {
    props: ['note'],
    template: `
        <section class="note-preview">
           <h4>{{note.noteTitle}}</h4>
           <div>{{note.info}}</div>
           <!-- <router-link :to="'/note/' +car.note " exact>Details</router-link>
           <router-link :to="'/note/edit/' +car.note" exact>Edit</router-link> -->
        </section>
    `,
    computed: {
        // previewClass() {
        //     return { pinned: this.note.isPinned }
        // }
    }
}