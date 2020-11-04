export default {
    props: ['mail'],
    template: `
        <!-- <section class="mail-preview" :class="previewClass"> -->
        <section class="mail-preview" >
           <span>{{mail.from}}</span>
           <span>{{mail.subject}}</span>
           <span>{{mail.body}}</span>
           <span>{{sentTime}}</span>
           <!-- <router-link :to="'/car/' +car.id " exact>Details</router-link> -->
           <!-- <router-link :to="'/car/edit/' +car.id " exact>Edit</router-link> -->
        </section>
    `,
    computed: {
        // previewClass() {
        //     return { active: this.car.isActive }
        // }
    },
    computed: {
        sentTime() {
            return new Date(this.mail.sentAt).toLocaleTimeString()


        }
    },
}