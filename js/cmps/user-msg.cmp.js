import { eventBus, EVENT_SHOW_MSG } from "../services/event-bus-service.js";

export default {
    template: `
    <section v-show="msg" class="user-msg">
    <p>{{msg}}</p>
    </section>
    `,
    data() {
        return {
            msg: null,
        };
    },
    created() {
        eventBus.$on(EVENT_SHOW_MSG, msg => {
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 2000)
        })
    }
};