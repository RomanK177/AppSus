export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" :class="previewClass">
          
           <span class="sent-from">{{mail.from}}</span>
           
        
           <span class="subject">{{mail.subject}}</span>
           <span class="body">{{mail.body}}</span>
           
        
           <span class="sent-at">{{sentTime}}</span>
           
           <!-- <router-link :to="'/car/' +car.id " exact>Details</router-link> -->
           <!-- <router-link :to="'/car/edit/' +car.id " exact>Edit</router-link> -->
        </section>
    `,
    computed: {
        sentTime() {
            return new Date(this.mail.sentAt).toLocaleTimeString()
        },
        previewClass() {
            return { unread: !this.mail.isRead }
        }
    },
}