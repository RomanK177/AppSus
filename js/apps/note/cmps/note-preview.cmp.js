
export default {
    props: ['note'],
    template: `
        <section class="note-preview" :class="previewClass">
           <h4>{{note.title}}</h4>
           <!-- <router-link :to="'/note/' +car.note " exact>Details</router-link>
           <router-link :to="'/note/edit/' +car.note" exact>Edit</router-link> -->
        </section>
    `,
    computed: {
        previewClass() {
            return { pinned: this.note.isPinned }
        }
    }
}