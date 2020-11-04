
export default {
    template: `
        <section class="note-filter">
            <h2>Find</h2>
            <input type="text" v-model="filterBy.noteTitle" placeholder="Search here" @input="emitFilter" />
            <label>
                <input type="checkbox" v-model="filterBy.isActive" @input="emitFilter" /> 
                Show Active
            </label>

            <hr />
            {{filterBy}}
        </section>
    `,
    data() {
        return {
            filterBy : {noteTitle : '', isActive : undefined}
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}