// import { myRouter } from "../../../routes.js";

export default {
    props: ['currFolder', 'counter'],
    template: `
<section class="mail-folder-bar">
   <button class="compose-btn" ><router-link class="compose-link" to="/mail/compose" exact>
   <img class="plus-img" src="./assets/imgs/plus.svg">
   Compose
</router-link></button>
   <div class="folders"></div>
    <button :class="{currFolder: currFolder==='inbox'}" @click="emitInboxFilter">Inbox({{counter}})</button> 
    <button :class="{currFolder: currFolder==='sent'}" @click="emitSentFilter">Sent</button> 
    <button :class="{currFolder: currFolder==='star'}" @click="emitStarFilter">Starred</button> 
  </div>

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

    },
}