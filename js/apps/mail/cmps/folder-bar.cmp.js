// import { myRouter } from "../../../routes.js";

export default {
    props: ['currFolder'],
    template: `
<section class="mail-folder-bar">
   <button class="compose-btn" ><router-link class="compose-link" to="/mail/compose" exact>+Compose</router-link></button>
   <div class="folders"></div>
    <button :class="{currFolder: currFolder==='inbox'}" @click="emitInboxFilter">Inbox</button> 
    <button :class="{currFolder: currFolder==='sent'}" @click="emitSentFilter">Sent</button> 
    <button :class="{currFolder: currFolder==='star'}" @click="emitStarFilter">Starred</button> 
  </div>

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

        }
    },
    methods: {
        emitInboxFilter() {
            this.$emit('doFolder', "inbox");
        },
        emitSentFilter() {
            this.$emit('doFolder', "sent");
        },
        emitStarFilter() {
            this.$emit('doFolder', "star");
        }
    },
    created() {
        console.log('currF', this.currFolder)
    },
}