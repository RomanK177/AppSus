import mailPreview from './mail-preview.cmp.js'


export default {
    props: ['mails'],
    template: `
    <section class="mail-list">
         <ul >
                <li v-for="currMail in mails" :key="currMail.id" >
                   <!-- <car-preview :car="currCar" @click.native="carClicked()" /> -->
                   <mail-preview :mail="currMail" @click.native="mailClicked()" />
                   <button @click="emitRemove(currMail.id)">x</button>
                </li>
          </ul>
    </section>
`,
    methods: {
        emitRemove(mailId) {
            this.$emit('remove', mailId)
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