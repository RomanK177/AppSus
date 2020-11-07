import { mailService } from "../services/mail-service.js";
import appHeader from '../../../cmps/app-header.cmp.js'
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'
import folderBar from '../cmps/folder-bar.cmp.js'
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js'

export default {
    template: ` 
    <section class="mail-app flex-column">
        <app-header></app-header>
        <!-- <div> -->
        <div class="filter-counter">
            <mail-filter @doFilter="setFilter"></mail-filter>
            <div class="unread-count" v-if="mails">Unread mails: {{unReadCount}}</div>
        </div>
        <div class="bar-list">
           <folder-bar :currFolder="currFolder" @doFolder="setFolder" class="flex-column"></folder-bar>
           <mail-list v-if="mails" :mails="folderedMails" @remove="removeMail" @readChange="changeRead" @starChange="changeStar" @clickedChange="changeClicked" ></mail-list>
        </div>
        <!-- </div> -->
    </section>
    `,
    data() {
        return {
            filterBy: undefined,
            currFolder: 'inbox',
            mails: null,
        }
    },
    components: {
        appHeader,
        mailList,
        mailFilter,
        folderBar,
    },
    computed: {
        mailsToShow() {
            if (!this.filterBy) return this.mails;
            const txt = this.filterBy.bySubject.toLowerCase();
            const { isRead } = this.filterBy
            var mails = this.mails.filter(mail => {
                return (mail.subject.toLowerCase().includes(txt) ||
                    (mail.from.toLowerCase().includes(txt)) ||
                    (mail.body.toLowerCase().includes(txt)))
            })
            return mails.filter(mail => {
                // if (this.filterBy.isRead === 'true') return mail.isRead;
                // if (this.filterBy.isRead === 'false') return !mail.isRead;
                if (isRead === 'true') return mail.isRead;
                if (isRead === 'false') return !mail.isRead;
                else return mail;
            })


        },
        folderedMails() {
            let mails = this.mailsToShow
            return mails.filter(mail => {
                if (this.currFolder === "inbox") return !mail.isSent;
                if (this.currFolder === "sent") return mail.isSent;
                if (this.currFolder === "star") return mail.isStar;
            })
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
        changeStar(mailId) {
            mailService.changeStar(mailId)
                .then(() => eventBus.$emit('show-msg', 'Mail Star Updated'))
                .catch(err => console.log('something went wrong', err))
        },
        changeClicked(mailId) {
            mailService.changeClicked(mailId)
                .then(() => eventBus.$emit('show-msg', 'Mail Clicked Updated'))
                .catch(err => console.log('something went wrong', err))
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
        setFolder(folderIs) {
            console.log("setFolder -> folderIs", folderIs)

            this.currFolder = folderIs
        }
    },
    created() {
        mailService.getMails()
            .then(mails => this.mails = mails)

    },
    mounted() {

    },

}