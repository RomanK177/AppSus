// import { myRouter } from "../../../routes.js";

export default {
    template: `
<section class="mail-folder-bar">
   <button class="compose-btn" @click="emitCompose"><router-link class="compose-link" to="/mail/compose" exact>+Compose</router-link></button>


<!-- <input type="text" v-model="filterBy.bySubject" placeholder="Search mail" @input="emitFilter" />
 <select v-model="filterBy.isRead" @change="emitFilter" name="filter-by" id="filter-by">
  <option value="null">All</option>
  <option value="true">Read</option>
  <option value="false">Unread</option> -->
 </select>
</section>
`,
    data() {
        return {
            filterBy: { bySubject: '', isRead: null }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        },
        emitCompose() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}