
export default {
    template: `
        <section class="note-filter">
            <input type="text" v-model="filterBy.type" placeholder="Search here" class="note-filtersearch" @input="emitFilter" />
            <!-- <label>
                <input type="checkbox" v-model="filterBy.isPinned" @input="emitFilter" /> 
                Show Pinned Notes
            </label> -->

            <!-- <hr />
            {{filterBy}} -->
        </section>
    `,
    data() {
        return {
            filterBy : {noteTitle : '', isPinned : undefined}
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}