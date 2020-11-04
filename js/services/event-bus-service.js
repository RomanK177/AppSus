export const EVENT_SHOW_MSG = 'show-msg';
export const EVENT_PUK = 'puk';

export const eventBus = new Vue()

// Event Bus is a simple mechanism to communicate app-wide
// This is a PubSub Mechanism:
// Publishers and Subscribers
// eventBus.$on(EVENT_PUK,(val)=>{
//     console.log('someone puked', val);
// })
// eventBus.$emit(EVENT_PUK, 17)
// eventBus.$emit(EVENT_PUK, 23)
