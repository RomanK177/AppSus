import mailPreview from './mail-preview.cmp.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
         <ul >
                <li v-for="currMail in mails" :key="currMail.id" >
                   <!-- <car-preview :car="currCar" @click.native="carClicked()" /> -->
                   <mail-preview :mail="currMail" @click.native="mailClicked()" />
                   <div>
                   <button @click="emitRemove(currMail.id)">&#128465</button>
                   <button @click="emitIsReadChange(currMail.id)">R</button>
                   </div>
                </li>
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
            // this.$router.push('/')
        }
    },
    components: {
        mailPreview
    },
    created() {
        // console.log(this.mails)
    },
}