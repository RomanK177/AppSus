import { mailService } from "../services/mail-service.js";
import appHeader from '../../../cmps/app-header.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'

export default {
    template: ` 
     <section class="mail-app">
     <appHeader></appHeader>
      <p> Mail App</p>
      <mail-filter @doFilter="setFilter"></mail-filter>
      <mailList :mails="mailsToShow" ></mailList>
      </section>
    `,
    data() {
        return {
            filterBy: null,
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
                    mail.isRead && this.filterBy.isRead ||
                    !mail.isRead && !this.filterBy.isRead
                )
            )
        }
    },
    methods: {
        addMail() {
            mailService.add(this.mailToEdit);
            this.mailToEdit = mailService.getEmptyMail();
        },
        removemail(mailId) {
            mailService.remove(mailId)
                .then(() => eventBus.$emit('show-msg', 'Mail Deleted'))
                .catch(err => console.log('something went wrong', err))
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)
        console.log("created -> this.mails", this.mails)
    },
    mounted() {
        console.log("created -> this.mails", this.mails)
    },

}