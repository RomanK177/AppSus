import { mailService } from "../services/mail-service.js";
import appHeader from '../../../cmps/app-header.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    template: ` 
     <section class="mail-app">
     <app-header></app-header>
      <!-- <p> Mail App</p> -->
      <mail-filter @doFilter="setFilter"></mail-filter>
      <p v-if="mails">Unread mails: {{unReadCount}}</p>
      <mail-list :mails="mailsToShow" @remove="removeMail" @readChange="changeRead" ></mail-list>
      </section>
    `,
    data() {
        return {
            filterBy: undefined,
            mails: null,
        }
    },
    components: {
        appHeader,
        mailList,
        mailFilter,
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const txt = this.filterBy.bySubject.toLowerCase();
            return this.mails.filter(mail => (mail.subject.toLowerCase().includes(txt) ||
                    (mail.from.toLowerCase().includes(txt)) ||
                    (mail.body.toLowerCase().includes(txt))) &&

                (
                    mail.isRead && this.filterBy.isRead === "true" ||
                    !mail.isRead && this.filterBy.isRead === "false" ||
                    (mail.isRead || !mail.isRead) && this.filterBy.isRead === "null"
                )
            )
        },
        unReadCount() {
            let count = 0
            this.mails.forEach(mail => { if (!mail.isRead) count++ });
            return count
        }
    },
    methods: {
        addMail() {
            mailService.add(this.mailToEdit);
            this.mailToEdit = mailService.getEmptyMail();
        },
        removeMail(mailId) {
            mailService.removeMail(mailId)
                .then(() => eventBus.$emit('show-msg', 'Mail Deleted'))
                .catch(err => console.log('something went wrong', err))
        },
        changeRead(mailId) {
            mailService.changeRead(mailId)
                .then(() => eventBus.$emit('show-msg', 'Mail Read Updated'))
                .catch(err => console.log('something went wrong', err))
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)

    },
    mounted() {

    },

}