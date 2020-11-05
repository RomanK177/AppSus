export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" :class="previewClass">
          
           <span class="sent-from">{{mail.from}}</span>
           
        <div class="prev-content">
           <span class="subject">{{mail.subject}}</span>
           <span class="body">-{{previewBody}}</span>
        </div>
        
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
        },
        previewBody() {
            return this.mail.body.slice(0, 20) + '...'
        }
    },
}