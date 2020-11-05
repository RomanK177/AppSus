export default {
    template: `
      <section class="mail-filter">
     <h2>Filter those mails</h2>
     <input type="text" v-model="filterBy.bySubject" placeholder="Search mail" @input="emitFilter" />
       <select @change="emitFilter" name="filter-by" id="filter-by">
        <option value="all">All</option>
        <option value="read">Read</option>
        <option value="unread">Unread</option>
       </select>
    </section>
    `,
    data() {
        return {
            filterBy: { bySubject: '', isRead: undefined }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}