import mailPreview from './mail-preview.cmp.js'
import mailDetail from './mail-detail.cmp.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
         <ul >
              <div v-for="currMail in mails" :key="currMail.id" >
                <li @click="emitRemove(currMail.id)" >
                   <!-- <car-preview :car="currCar" @click.native="carClicked()" /> -->
                   <mail-preview :mail="currMail" @click.native="mailClicked()" />
                   <div class="prev-buttons">
                    <button @click="emitRemove(currMail.id)">&#128465</button>
                    <button @click="emitIsReadChange(currMail.id)">R</button>
                   </div>
                </li>
                <mail-detail v-if="mailClicked" :mail="currMail" class="mail-detail"> Ss</mail-detail>
                <div>
          </ul>
    </section>
`,
    methods: {
        emitRemove(mailId) {
            this.$emit('remove', mailId)
        },
        emitIsReadChange(mailId) {
            this.$emit('readChange', mailId)
        },
        mailClicked() {
            return true
        }
    },
    components: {
        mailPreview,
        mailDetail
    },
    created() {
        // console.log(this.mails)
    },
}