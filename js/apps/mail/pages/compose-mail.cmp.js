import { mailService } from "../services/mail-service.js";
import { eventBus, EVENT_SHOW_MSG } from '../../../services/event-bus-service.js';

export default {

    template: `
    <section class="compose-mail">
        
            <h2>New Message</h2>
            <form @submit.prevent="sendMail" class="new-mail-form" >
            
             <input v-model="mailToSend.to" type="text" placeholder="To">
             <br>
             <input v-model="mailToSend.subject" type="text" placeholder="Subject">
             <br>
             <textarea v-model="mailToSend.body" name="new-mail-body" id="new-mail-body" cols="60" rows="25"></textarea>
             <button>Send</button><button>&#128465</button>
            </form>
    </section>
    `,
    data() {
        return {
            mailToSend: mailService.getEmptyMail()
        }
    },
    methods: {
        sendMail() {
            mailService.sendMail(this.mailToSend)
                .then(() => {
                    const msg = {
                        txt: 'Mail Sent Successffully',
                        type: 'success'
                    }
                    eventBus.$emit(EVENT_SHOW_MSG, msg)
                    this.$router.push('/mail')
                })
                .catch(err => {
                    console.log('ERR:', err);
                    const msg = {
                        txt: 'Couldnt send your mail',
                        type: 'danger'
                    }
                    eventBus.$emit(EVENT_SHOW_MSG, msg)

                })
        }
    },

};