import mailPreview from './mail-preview.cmp.js'
import mailDetail from './mail-detail.cmp.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
         <ul >
              <div v-for="currMail in mails" :key="currMail.id" >
                <li @click.stop="mailClicked" >
                   <!-- <car-preview :car="currCar" @click.native="carClicked()" /> -->
                   <mail-preview :mail="currMail" @click.native="mailClicked()" />
                   <div class="prev-buttons">
                    <button @click="emitRemove(currMail.id)">&#128465</button>
                    <button @click="emitIsReadChange(currMail.id)">R</button>
                   </div>
                </li>
                <mail-detail v-if="isCklicked" :isClicked="true" :mail="currMail" class="mail-detail"> Ss</mail-detail>
               </div>
          </ul>
    </section>
`,
    data() {
        return {
            isCklicked: false,
        }
    },
    methods: {
        emitRemove(mailId) {
            this.$emit('remove', mailId)
        },
        emitIsReadChange(mailId) {
            this.$emit('readChange', mailId)
        },
        mailClicked() {
            console.log('mail clicked')
            this.isCklicked = true
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