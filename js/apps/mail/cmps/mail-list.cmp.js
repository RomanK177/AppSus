import mailPreview from './mail-preview.cmp.js'
import mailDetail from './mail-detail.cmp.js'


export default {
    name: 'Mail-List',
    props: ['mails'],
    template: `
    <section class="mail-list">
         <ul >
              <div v-for="currMail in mails" :key="currMail.id" >
                <li >
                   <!-- <car-preview :car="currCar" @click.native="carClicked()" /> -->
                   <button :class="{star: currMail.isStar}" @click="emitIsStarChange(currMail.id)">&#9733</button>
                   <mail-preview :mail="currMail" @click.native="mailClicked(),mailClicked(currMail.id)" />
                   <div class="prev-buttons">
                    <button @click="emitRemove(currMail.id)">&#128465</button>
                    <button :class="{unread: !currMail.isRead}" @click="emitIsReadChange(currMail.id)">R</button>
                   </div>
                </li>
                <mail-detail :mail="currMail" class="mail-detail"> </mail-detail>
               </div>
          </ul>
    </section>
`,
    // data() {
    //     return {

    //     }
    // },
    methods: {
        emitRemove(mailId) {
            this.$emit('remove', mailId)
        },
        emitIsReadChange(mailId) {
            this.$emit('readChange', mailId)
        },
        emitIsStarChange(mailId) {
            this.$emit('starChange', mailId)
        },
        mailClicked(mailId) {
            console.log('mail clicked')
            this.$emit('clickedChange', mailId)

        }
    },
    components: {
        mailPreview,
        mailDetail
    },
    // created() {
    //     // console.log(this.mails)
    // },
}