export default {
    props: ['mail'],
    template: `
        <section class="mail-preview" :class="previewClass"> 
        <!-- <div> -->
            <div class="prev-content flex">
              <span class="sent-from">{{mail.from}}</span>
              <span class="subject">{{mail.subject}}</span>
              <span class="body">-{{previewBody}}</span>
            </div>
        <!-- </div> -->
           <span class="sent-at">{{sentTime}}</span>
        </section>
    `,
    computed: {
        sentTime() {
            return new Date(this.mail.sentAt).getHours() + ':' + new Date(this.mail.sentAt).getMinutes()
        },
        previewClass() {
            return { unread: !this.mail.isRead }
        },
        previewBody() {
            return this.mail.body.slice(0, 30) + '...'
        }
    },
}